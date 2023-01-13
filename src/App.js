import { useEffect, useState } from 'react';
import './App.css';
import Light from './Components/Light';

function App() {

  // AQUI PUEDES AGREGAR MAS LUCES PARA EL SEMAFORO
  const [changeLight, setChangeLight] = useState(0);
  const [colors, setColors] = useState(["red","yellow","green","blue"]);
  const [txtColor, setTxtColor] = useState("")

useEffect(() => {
 
  async function change() {
    return new Promise(function(resolve, reject) {

        setTimeout(resolve, 2000);
    }).then(function() {

          if(changeLight === colors.length -1){
          setChangeLight(0);
        } else {
          setChangeLight(changeLight + 1);
        }
      });
    }
    change();
}, [changeLight, colors])

function inputColor(e){
  e.preventDefault();
  setTxtColor(e.target.value);
}

function addLight(){
  if(txtColor.length > 1){
    setColors([...colors, txtColor]);
    setChangeLight(colors.length -1);
    setTxtColor("");
  } else {
    alert("El texto es demasiado corto");
  }
}

function removeLight(e){
  e.preventDefault();
  console.log(e.target.id)
  if(colors.length > 1){
    const newColors = colors.filter(light => light !== colors[e.target.id]);
    setColors( newColors);
    setChangeLight(colors.length -1);
  } else {
    alert("No hay mas luces que eliminar");
  }
}


  return (
    <div className='App'>
    <div className="light-container">
      {colors.map((color, index) => (
        <Light 
        color={color} 
        changeLight={changeLight} 
        setChangeLight={setChangeLight} 
        colors={colors}
        setColors={setColors}
        removeLight={removeLight}
        index={index}
        />
      ))}
    </div>
     <input type="text" placeholder='color' onChange={(e) => inputColor(e)} value={txtColor}/>
      <button onClick={() => addLight()}>Add </button>
    </div>
  );
}

export default App;
