// toolbar.js

import { DraggableNode } from './draggableNode';
import { InputIcon, LLMIcon, OutputIcon, TextIcon, CounterIcon, MathIcon, RandomIcon, FilterIcon, LoggerIcon } from './nodes/icons';

export const PipelineToolbar = () => {

    return (
        <div className="app-toolbar">
            <DraggableNode type='customInput' label='Input' icon={<InputIcon label="Input" />} />
            <DraggableNode type='llm' label='LLM' icon={<LLMIcon label="LLM" />} />
            <DraggableNode type='customOutput' label='Output' icon={<OutputIcon label="Output" />} />
            <DraggableNode type='text' label='Text' icon={<TextIcon label="Text" />} />
            <DraggableNode type='counter' label='Counter' icon={<CounterIcon label="Counter" />} />
            <DraggableNode type='math' label='Math' icon={<MathIcon label="Math" />} />
            <DraggableNode type='random' label='Random' icon={<RandomIcon label="Random" />} />
            <DraggableNode type='filter' label='Filter' icon={<FilterIcon label="Filter" />} />
            <DraggableNode type='logger' label='Logger' icon={<LoggerIcon label="Logger" />} />
        </div>
    );
};
