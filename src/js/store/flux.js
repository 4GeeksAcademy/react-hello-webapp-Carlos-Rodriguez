const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			usuarios: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			crearUsuario: (name,email,phone,address) => {
				const store = getStore();
				let nuevoUsuario = {
					name: name,
					email: email,
					phone: phone,
					address: address, 
				}

				let nuevaListaUsuarios = 
					store.usuarios.concat([nuevoUsuario])
			
					setStore({ usuarios: nuevaListaUsuarios });
			}
		}
	};
};

export default getState;
