import React from "react";
import Header from "./Header";
import * as Pdf_files from '../assets/pdf/index';
import icon from "../assets/images/pdf_icon.png";
import { ListResources } from "../helpers/constants";

export default function Whitepaper() {

  return (
    <div className="resources">
      <div className='comingSoon header'>
        <Header />
        <h1>Hool Resources</h1>
        <div className="list_files">
          {ListResources.map((resource) => (
            <div className="file_item">
              <a href={resource.link} rel='noreferrer' target='_blank'>
                <img className="icon" src={resource.icon} alt="pdf file" />
                <span>{resource.name}</span>
              </a>
            </div>
          ))}
          {/* <div className="file_item">
            <a href={Pdf_files.hool_tokenomic} rel='noreferrer' target='_blank'>
              <img className="icon" src={icon} alt="pdf file" />
              <span>Hool Tokenomic</span>
            </a>
          </div>
          <div className="file_item">
            <a href={Pdf_files.hool_gameplay} rel='noreferrer' target='_blank'>
              <img className="icon" src={icon} alt="pdf file" />
              <span>Hool Gameplay</span>
            </a>
          </div>
          <div className="file_item">
            <a href={Pdf_files.hool_tokenomic} rel='noreferrer' target='_blank'>
              <img className="icon" src={icon} alt="pdf file" />
              <span>Hool Tokenomic</span>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
