from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# Allow CORS for frontend running locally
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class Edge(BaseModel):
    id: str = None
    source: str
    target: str

class Node(BaseModel):
    id: str
    type: str = None
    data: Dict = None

class PipelinePayload(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    # build indegree map
    indegree = {n.id: 0 for n in nodes}
    adj = {n.id: [] for n in nodes}

    for e in edges:
        if e.source in adj and e.target in indegree:
            adj[e.source].append(e.target)
            indegree[e.target] += 1

    # Kahn's algorithm
    q = [n for n in indegree if indegree[n] == 0]
    processed = 0
    while q:
        u = q.pop()
        processed += 1
        for v in adj.get(u, []):
            indegree[v] -= 1
            if indegree[v] == 0:
                q.append(v)

    return processed == len(nodes)


@app.post('/pipelines/parse')
def parse_pipeline(payload: PipelinePayload):
    num_nodes = len(payload.nodes)
    num_edges = len(payload.edges)
    dag = is_dag(payload.nodes, payload.edges)
    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag}
