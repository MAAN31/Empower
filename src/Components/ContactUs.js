import React, { useEffect } from 'react';

const YourComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src="https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Once the script is loaded, initialize the Visme form
      window.vismeformsEmbed.init();
    };

    return () => {
      // Cleanup: remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div class="visme_d" data-title="Untitled Project" data-url="g7qv6v78-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="50401"></div>
  );
};

export default YourComponent;
