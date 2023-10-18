import React from 'react';
import {MdDownloadForOffline} from 'react-icons/md';

class CVGenerator extends React.Component {
  handlePrint = () => {
    window.print();
  }

  render() {
    return (
      <div>
        <button id="downloadButton" onClick={this.handlePrint}><MdDownloadForOffline /></button>
      </div>
    );
  }
}

export default CVGenerator;
