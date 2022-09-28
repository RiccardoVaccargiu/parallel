import { Flex } from "@chakra-ui/react"
import { useState } from "react"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"


const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 10,
  background: isDragging ? "#4a2975" : "white",
  color: isDragging ? "white" : "black",
  border: "1px solid black",
  fontSize: "20px",
  borderRadius: "5px",
  ...draggableStyle
})

export default function List() {
    const [list, setList] = useState([
      {
        id: "1",
        name: "hello"
      },
      {
        id: "2",
        name: "hello"
      },
      {
        id: "3",
        name: "hello"
      },
      {
        id: "4",
        name: "hello"
      },
      {
        id: "5",
        name: "hello"
      },
      {
        id: "6",
        name: "hello"
      }
    ])

    const onDragEnd = (result: DropResult) => {
      const {source, destination} = result
      console.log("DESTINATION", destination)
      if(!destination) return

      const items = Array.from(list)
      const [newOrder] = items.splice(source.index, 1)
      items.splice(destination.index, 0, newOrder)

      setList(items)
    }

    return (
      <Flex>
        <h1>Drag n Drop</h1>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list" direction="horizontal">
            {(provided) => (
              <Flex bg="red" maxW="400px" {...provided.droppableProps} ref={provided.innerRef}>
                {list.map(({id, name}, index) => {
                  return(
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided, snapshot) => (
                        <div 
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                          {name}
                        </div>
                      )}
                    </Draggable>
                  )
                })}
              </Flex>
            )}
          </Droppable>
        </DragDropContext>
      </Flex>
    )
}