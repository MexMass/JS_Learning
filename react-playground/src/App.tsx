import ListGroup from "./components/ListGroup";

function App() {

  let handleSelectedItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <div>
        <ListGroup items={["Orange", "Pineapple", "Watermelon", "Apple", "Mango"]} heading="Fruits" onSelectedItem={handleSelectedItem} />
        <ListGroup items={["Tomas", "Mikas", "Yilin", "Lukas", "George Washington"]} heading="Great People" onSelectedItem={handleSelectedItem} />
      </div>
    </>
  );
}

export default App;
