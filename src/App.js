import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      personne: {
        fullName: 'Wilson ikeda',
        bio: 'Développeur web',
        imgSrc: 'https://img.freepik.com/photos-gratuite/portrait-programmeur-afro-americain-concentre-portant-ecouteurs-sans-fil-travaillant-regardant-ecran-ordinateur-tout-tapant-developpeur-logiciels-ecrivant-du-code-dans-bureau-agence-informatique_482257-43992.jpg',
        profession: 'Ingénieur logiciel'
      },
      montre: false,
      tempsEcoule: 0
    };
    this.affichage = this.affichage.bind(this);
  }
  ajoutInterval() {
    this.ajoutInterval(() => {
      this.setState(precTemps => ({tempsEcoule: precTemps.tempsEcoule ++}))
    },1000);
  }

  fermerInterval() {
    clearInterval(this.ajoutInterval);
  }
  
  affichage() {
    this.setState(precState => ({montre: !precState.montre}));
  }
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { montre, tempsEcoule } = this.state;

    return (
      <>
        <div>
          <h1>PROFIL PERSONNE</h1>
          <button onClick={this.affichage}>
            {montre ? 'Afficher Profil' : 'Cacher Profil'}
          </button>
          {montre && (
            <div>
              <h1>{fullName}</h1>
              <p>{bio}</p>
              <img src={imgSrc} alt={fullName} />
              <p>{profession}</p>
            </div>
          )}
          <p>Temps ecoule {tempsEcoule} secondes</p>
        </div>
      </>
    )
  }
}

export default App;
