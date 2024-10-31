'use client';
import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import BoardColumn from '../component/board-column';
import { Calendar, List, Plus, Settings } from 'lucide-react';
import { IoIosMore } from 'react-icons/io';
import { initialColumns } from '@shtcut/_shared/data';
import { Columns } from '@shtcut/types/types';
import { Button } from '@shtcut-ui/react';
import { PiAlignCenterVertical } from 'react-icons/pi';
import ListComponent from '../component/list-component';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { SearchInput } from '@shtcut/components/dashboard/nav-component';

const TaskComponent = () => {
    const [columns, setColumns] = useState<Columns>(initialColumns);
    const [selectTab, setSelectTab] = useState('list');

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        console.log('source', source);
        console.log('destination', destination);

        const sourceColumn = columns[source.droppableId];
        const destinationColumn = columns[destination.droppableId];

        const sourceItems = Array.from(sourceColumn.items);
        const [movedItem] = sourceItems.splice(source.index, 1);

        if (source.droppableId === destination.droppableId) {
            sourceItems.splice(destination.index, 0, movedItem);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                }
            });
        } else {
            const destinationItems = Array.from(destinationColumn.items);
            destinationItems.splice(destination.index, 0, movedItem);

            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destinationColumn,
                    items: destinationItems
                }
            });
        }
    };

    const actionsData = [
        {
            id: 'list',
            name: 'List',
            icon: <List size={18} />
        },
        {
            id: 'board',
            name: 'Board',
            icon: <PiAlignCenterVertical size={18} />
        },
        {
            id: 'calendar',
            name: 'Calendar',
            icon: <Calendar size={16} />
        }
    ];

    const handleSelect = (val: string) => {
        setSelectTab(val);
    };

    return (
        <div>
            <section className="flex items-center justify-between">
                <h1 className="font-semibold text-[#2B2829] text-xl">Tasks</h1>
                <section className="flex items-center gap-x-2">
                    <Button variant={'outline'} className="">
                        <Settings color="#5B6871" size={14} />
                    </Button>
                    <Button variant={'outline'} className="">
                        <IoEllipsisHorizontal color="#5B6871" size={14} />
                    </Button>
                    <Button className="text-xs h-9 flex items-center gap-x-3 bg-primary-0">
                        <Plus size={18} color="white" /> New Task
                    </Button>
                </section>
            </section>

            <section className="flex items-center justify-between border-b py-3 mt-10">
                <div className="flex items-center gap-x-6">
                    {actionsData.map((data) => (
                        <section
                            className={`flex gap-x-1 cursor-pointer text-sm items-center ${selectTab === data.id ? 'text-primary-0' : 'text-[#5A5555]'}`}
                            onClick={() => handleSelect(data.id)}
                            key={data.id}
                        >
                            {data.icon}
                            <p className={`text-sm`}>{data.name}</p>
                        </section>
                    ))}
                </div>
                <div>
                    <SearchInput />
                </div>
            </section>
            {selectTab === 'board' && (
                <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
                    <div className="flex space-x-4 py-6">
                        {Object.keys(columns).map((columnId) => {
                            const column = columns[columnId];
                            return (
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided) => (
                                        <div
                                            className="bg-[#F5F7F9]  p-4 rounded-lg w-full "
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            <section className="flex items-center justify-between mb-4">
                                                <h2 className="text-sm font-medium text-[#6F6F6F] ">{column.title}</h2>
                                                <section className="flex items-center gap-x-2">
                                                    <Plus size={16} className="cursor-pointer" />
                                                    <IoIosMore size={16} className="cursor-pointer" />
                                                </section>
                                            </section>
                                            <div className="overflow-y-auto h-[700px]">
                                                <BoardColumn items={column.items} />
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            );
                        })}
                    </div>
                </DragDropContext>
            )}
            {selectTab === 'list' && <ListComponent />}
        </div>
    );
};

export default TaskComponent;
