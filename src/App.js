import { useState, useEffect } from 'react';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  const listStr = sessionStorage.getItem('todoList');
  const listArr = listStr ? JSON.parse(listStr) : [];
  const [list, setList] = useState(listArr);
  const idStr = sessionStorage.getItem('id');
  const idNum = idStr ? +idStr : 1;
  const [id, setId] = useState(idNum);

  useEffect(() => {
    sessionStorage.setItem('todoList', JSON.stringify(list));
  }, [list]);
  useEffect(() => {
    sessionStorage.setItem('id', id);
  }, [id]);

  return (
    <>
      <Input setList={setList} id={id} setId={setId} />
      <div>
        { list.map((todo, idx) => <Todo key={todo.id} idx={idx} {...todo} setList={setList} />) }
      </div>
    </>
  );
}

export default App;

