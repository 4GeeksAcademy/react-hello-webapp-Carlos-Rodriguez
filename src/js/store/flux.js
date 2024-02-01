const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacto: [],
			usuarios: [],
			contactos: [],
			contact:{}

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
			
		loadContacts: () => {
			fetch('https://playground.4geeks.com/apis/fake/contact/agenda/carlosR')

				.then((response) => response.json()
				)
				.then((response) => {

					console.log(response)

					setStore({ contactos: response })
				})

				.catch(error => console.log(error))

		},

		crearUsuario: async (contactInfo) => {
			try {
			  const response = await fetch(
				"https://playground.4geeks.com/apis/fake/contact/",
				{
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(contactInfo),
				}
			  );
			  const contact= await response.json();
			  getActions().loadContacts()
			} catch (error) {
			  console.error("Error creating contact:", error);
			}
		  },

		  editarUsuario: async (editcontactInfo,volveraContactos) => {
			try {
			  const response = await fetch(
				`https://playground.4geeks.com/apis/fake/contact/${editcontactInfo.id}`,
				{
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(editcontactInfo),
				}
			  );
			  const contact= await response.json();
			  getActions().loadContacts()
			  volveraContactos()
			} catch (error) {
			  console.error("Error creating contact:", error);
			}
		  },

		  eliminarUsuario: async (id) => {
			try {
			  const response = await fetch(
				`https://playground.4geeks.com/apis/fake/contact/${id}`,
				{
				  method: "DELETE",
				  headers: {
					"Content-Type": "application/json",
				  },
				}
			  );
			  const contact= await response.json();
			  getActions().loadContacts()
			} catch (error) {
			  console.error("Error creating contact:", error);
			}
		  },

	}
};
};

export default getState;
