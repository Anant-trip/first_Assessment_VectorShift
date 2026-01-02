// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((s) => s.nodes);
    const edges = useStore((s) => s.edges);

    const onSubmit = async () => {
        try {
            const resp = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            const json = await resp.json();
            alert(`Pipeline parsed:\nNodes: ${json.num_nodes}\nEdges: ${json.num_edges}\nIs DAG: ${json.is_dag}`);
        } catch (e) {
            alert('Failed to submit pipeline: ' + e.message);
        }
    };

    return (
        <div className="submit-wrap">
            <button className="submit-btn" onClick={onSubmit} type="button">Submit</button>
        </div>
    );
}
