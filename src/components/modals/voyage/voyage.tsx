import { Modal } from '@/components/modal';
import { PresetItem } from '@/components/toolbox/generics/preset-item';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import type { DropResult } from 'react-beautiful-dnd';

interface VoyageModalProps {
  onClose: () => void;
  show: boolean;
}

export function VoyageModal({ onClose, show }: VoyageModalProps) {
  const presets = [
    { id: '1', name: 'Snow by the river' },
    { id: '2', name: 'Rain in the quiet library' },
    { id: '3', name: 'Thunderstorm with everyone sheltered' },
  ];

  const handleDragEnd = (result: DropResult) => {
    // No need to use 'result', just leave the function empty for now
    console.log(result);
  };

  return (
    <Modal show={show} onClose={onClose}>
      <header>
        <h2>Voyage</h2>
        <p>Immerse yourself in a voyage by planning a presets sequence.</p>
      </header>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="presets">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {presets.map((preset, index) => (
                <Draggable
                  draggableId={preset.id}
                  index={index}
                  key={preset.id}
                >
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <PresetItem name={preset.name} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Modal>
  );
}
