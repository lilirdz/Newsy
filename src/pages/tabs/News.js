import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/headers/SmallHeader";
import LargeHeader from "../../components/headers/LargeHeader";

const News = () => {
  return (
    <IonPage>
      <SmallHeader title="Newsy" />
      <IonContent fullscreen>
        <LargeHeader title="Newsy" />
      </IonContent>
    </IonPage>
  );
};

export default News;
