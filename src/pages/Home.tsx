import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
        <button ion-button (click) = "showAlert()" icon-start large round color="dark">
    <ion-icon name="star"></ion-icon>
    clike me m8
  </button>
      </IonContent>
    </IonPage>
  );
};

export default Home;
