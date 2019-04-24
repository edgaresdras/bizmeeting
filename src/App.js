import React, {
     Component
} from "react";
import Header from "./components/Header";

class App extends Component {

     token = "TSAFR3JKCDBRNTZWJRKE";

     state = {
          categorias: []
     }

     componentDidMount() {
          this.obtenerCategorias();
     }

     obtenerCategorias = async () => {
          let url= `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

          await fetch(url)
               .then(respuesta => {
                    return respuesta.json();
               })
               .then(categorias => {
                    this.setState({
                         categorias: categorias.categories
                    })
               })     
     }

     render() {
          return ( <
               div className = "App" >
               <
               Header / >
               <
               /div>
          );
     }
}

export default App;