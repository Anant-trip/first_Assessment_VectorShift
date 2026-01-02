from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

sample1 = {
    "nodes": [{"id": "a"}, {"id": "b"}],
    "edges": [{"source": "a", "target": "b"}]
}

sample2 = {
    "nodes": [{"id": "a"}, {"id": "b"}],
    "edges": [{"source": "a", "target": "b"}, {"source": "b", "target": "a"}]
}

resp1 = client.post('/pipelines/parse', json=sample1)
print('Sample1 status', resp1.status_code, resp1.json())

resp2 = client.post('/pipelines/parse', json=sample2)
print('Sample2 status', resp2.status_code, resp2.json())

# Basic assertions
assert resp1.status_code == 200
assert resp1.json() == {"num_nodes": 2, "num_edges": 1, "is_dag": True}
assert resp2.status_code == 200
assert resp2.json() == {"num_nodes": 2, "num_edges": 2, "is_dag": False}

print('All tests passed')
