
export class ContactServices{
	constructor(loginForm){
		this.loginForm=loginForm;
	}
	getAllContacts(){
		let token=loginForm.token;
		console.log(token);
		return fetch(ContactServices.BASE_URL+'contacts', {
			method: 'GET',
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json',
				'Authorization':'Bearer '+token
		}})
			.then(r=>r.json())
			.then(r=>r.contacts)
			.then(cs=>cs.map(c=>Contact.createContact(c)))
	}

	findContact(chosenName, chosenValue){
		return fetch(ContactServices.BASE_URL+'contacts/find', {
			method: 'POST',
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json',
				'Authorization':'Bearer '+token.token
		},

		body: JSON.stringify({
				name: chosenName,
				value: chosenValue
				

	})

		})
			.then(r=>r.json())
			.then(r=>r.contacts)
			.then(cs=>cs.map(c=>Contact.createContact(c)))
	}


	addContact(contact){
		return fetch(UserServices.BASE_URL+'contacts/add',{
			method: 'POST',
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json',
				'Authorization':'Bearer '+token.token
			},
			body: JSON.stringify({
				value: contact.value,
				name: contact.name,
				type: contact.type
			
			})
	
		})
	}
}

ContactServices.BASE_URL='https://mag-contacts-api.herokuapp.com/';
