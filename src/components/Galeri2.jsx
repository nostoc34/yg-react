import React, { useState, useRef } from 'react';
import { GalFrontFrame, GaleriFrame2 } from './GaleriFrame2';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import 'bootstrap/dist/css/bootstrap.min.css';

function Galeri2() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  return (
    <Container style={{ paddingTop: '2rem' }}>
      {showButton && (
        <button
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          ref={nodeRef}
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <h3>
            Animated alert message
          </h3>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          <Button
            variant="primary"
            onClick={() => setShowMessage(false)}
          >
            Close
          </Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
}

export default Galeri2;