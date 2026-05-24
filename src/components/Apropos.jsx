import React from "react"
import Carousel from "./Carousel"


export default function Apropos() {
  return (
	<section className="px-6 mt-4">
	  <h2 className="text-center mb-4 font-bold md:text-2xl text-xl">A propos de nous </h2>
	  <p className="text-gray-500 text-lg md:mb-12 mb-4 text-center ">Découvrez qui nous sommes </p>
	   <div className="rounded-lg grid gap-4 grid-cols-1 md:grid-cols-2">
		<div className="shadow-lg px-6 rounded-2xl">
			<h3 className="font-bold mt-8  mb-2">Une équipe dynamique et réactive </h3>
			<p className="text-gray-500 leading-relaxed pb-4 text-justify md:pb-0 md:leading-loose">Chez GeSpeed Delivery, notre force repose sur une équipe d’élite composée de professionnels qualifiés, engagés et rigoureusement sélectionnés pour garantir un service de déménagement et de transport irréprochable. Formée aux meilleures pratiques logistiques, notre équipe intervient avec efficacité, ponctualité et professionnalisme afin d’assurer la sécurité de vos biens à chaque étape du processus. Qu’il s’agisse d’un déménagement résidentiel, du transport de matériaux ou d’une intervention spécifique, GeSpeed Delivery met à votre disposition des experts animés par un seul objectif : offrir une expérience fiable, rapide et en toute confiance.</p>
		</div>
		<div>
		  <Carousel />
                </div>

	  </div>
	</section>
 )
}
