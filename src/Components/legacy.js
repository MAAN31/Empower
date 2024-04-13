import React from 'react';
import "../App.css";


function Legacy() {
  return (
    <div className="legacy-container">
        
      {/* <div className="row"> */}
        <div className="col-md-6">
          <div className="section-banner">
            {[...Array(7)].map((_, index) => (
              <div key={`star-${index + 1}`} id={`star-${index + 1}`}>
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <div className="legacy-content">
          <h2 className='content-title'>Legacy of Tomorrow</h2>
            <p>
              Our group had a goal of helping future leaders thrive, and teach them how to create opportunities for themselves in the future. We are hoping that our influence will have taught them skills to sustain themselves, but also the planet as well. This is why our workshops consisted of establishing businesses inspired by the Sustainable Development Goals (SDG). Additionally, we are willing to pass on our NGO to future C4 students if they are interested, which will further continue our legacy.
            </p>
            <p>
              Although we may not be there to directly witness these businesses potentially come to fruition, our hope is to have laid the groundwork for the potential beginning of their journeys. We ensured that we did everything within our power to jumpstart their future careers. Drawing from our own experiences as students, we shared insights and advice to kickstart their future careers. Furthermore, we worked with Healing As One to award certificates to help bolster each participant’s professional profile. Finally, we taught them about the intricacies of building a sustainable, and environmentally friendly business. Even though we will not be conducting any more workshops in the future, we know that we left behind a legacy through the knowledge, tools, and insights we offered to help empower students and unlock the leadership potential we know they possess.
            </p>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Legacy;
