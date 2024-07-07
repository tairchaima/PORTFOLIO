
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-lg p-5">
          <h2 className="mb-[30px] mt-12 font-kaushan text-3xl text-gray-dark md:text-[2.4rem] lg:mt-24 lg:text-[2.4rem] text-center">
          Contacter moi sur
          </h2>
          <div className="mb-5 mt-16 w-full rounded-lg border border-gray-100 bg-gray-100 px-4 py-8 shadow-md md:p-10 lg:mt-10">
            <motion.h3
              className="mb-4 text-lg font-medium text-gray-dark"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Coordonnées <span className="text-pink-global">de Contact</span>
            </motion.h3>
  
            <motion.div
              className="group mt-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:chaimatair@hotmail.com"
                target="_blank"
                title="Email"
                className="flex items-center gap-4"
              >
                <div className="inline-block bg-gray-200 p-3 text-xl transition-colors duration-500 group-hover:bg-pink-global group-hover:text-off-white lg:text-3xl">
                  <BsEnvelopeAtFill />
                </div>
                <div>
                  <p className="text-sm md:text-base">Envoyer un email</p>
                  <p className="break-all text-sm text-pink-global transition-colors duration-500 group-hover:text-pink-light">
                    chaimatair@hotmail.com
                  </p>
                </div>
              </a>
            </motion.div>
  
            <hr className="color-gray my-8" />
  
            <motion.div
              className="group mt-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="tel:0699798422"
                title="Téléphone"
                target="_blank"
                className="flex items-center gap-4"
              >
                <div className="inline-block bg-gray-200 p-3 text-xl transition-colors duration-500 group-hover:bg-pink-global group-hover:text-off-white lg:text-3xl">
                  <FaPhoneVolume />
                </div>
                <div>
                  <p className="text-sm md:text-base">Numéro de téléphone</p>
                  <p className="text-sm text-pink-global transition-colors duration-200 group-hover:text-pink-light">
                    Contacter par téléphone
                  </p>
                </div>
              </a>
            </motion.div>
  
            <hr className="color-gray my-8" />
  
            <motion.div
              className="group mt-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="https://maps.app.goo.gl/KUiN3W1KLwgmdLDS8"
                target="_blank"
                title="Localisation"
                className="flex items-center gap-4"
              >
                <div className="inline-block bg-gray-200 p-3 text-xl transition-colors duration-500 group-hover:bg-pink-global group-hover:text-off-white lg:text-3xl">
                  <ImLocation2 />
                </div>
                <div>
                  <p className="text-base">Localisation</p>
                  <p className="text-sm text-pink-global transition-colors duration-200 group-hover:text-pink-light">
                    Marseille
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;