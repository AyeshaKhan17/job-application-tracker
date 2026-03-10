import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import axios from "axios";

const columns = ["Applied", "Interview", "Offer", "Rejected"];

function KanbanBoard({ jobs, refresh }) {

    const handleDragEnd = async (result) => {


        if (!result.destination) return;

        const jobId = result.draggableId;
        const newStatus = result.destination.droppableId;

        try {

            await axios.put(`http://localhost:5000/jobs/${jobId}`, {
                status: newStatus
            });

            refresh();

        } catch (error) {
            console.error(error);
        }


    };

    return (

        <DragDropContext onDragEnd={handleDragEnd}>

            <div className="grid grid-cols-4 gap-6">

                {columns.map((status) => {

                    const columnJobs = jobs.filter(job => job.status === status);

                    return (

                        <Droppable droppableId={status} key={status}>

                            {(provided) => (

                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="bg-gray-100 rounded-xl p-4 min-h-[400px]"
                                >

                                    <h2 className="font-semibold text-lg mb-4">
                                        {status}
                                    </h2>

                                    {columnJobs.map((job, index) => (

                                        <Draggable
                                            key={job.id}
                                            draggableId={job.id.toString()}
                                            index={index}
                                        >

                                            {(provided) => (

                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="bg-white p-4 rounded-lg shadow mb-3 hover:shadow-md transition"
                                                >

                                                    <p className="font-semibold">
                                                        {job.company}
                                                    </p>

                                                    <p className="text-sm text-gray-500">
                                                        {job.role}
                                                    </p>

                                                </div>

                                            )}

                                        </Draggable>

                                    ))}

                                    {provided.placeholder}

                                </div>

                            )}

                        </Droppable>

                    );

                })}

            </div>

        </DragDropContext>


    );

}

export default KanbanBoard;
