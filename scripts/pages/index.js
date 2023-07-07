    const getPhotographers= async() =>{
        let response = await fetch("../data/photographers.json");
        let photographers= await response.json();

        //let photographers=[];
        // await fetch("../data/photographers.json")
        //     .then((res)=> res.json())
        //     .then((data) => (photographers = data))
        //     .catch(err => console.log("oh no", err));
        // et bien retourner le tableau photographers seulement une fois récupéré
        return photographers;
    }

    const displayData = async(photographers) => {
        const photographersSection = document.querySelector(".photographer_section");
        const PhotographersData = photographers;

        PhotographersData
            .map(photographer =>  new Photographer(photographer))
            .forEach((photographer) => {           
                const Template = new UserCard(photographer);
                photographersSection.appendChild(Template.getUserCardDOM());
        });
    }

    const init= async() =>{
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
