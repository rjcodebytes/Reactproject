import React, { useState } from 'react';

function App() {
  const [isBackgroundDark, setIsBackgroundDark] = useState(false);

    const toggleBackgroundColor = () => {
        setIsBackgroundDark((prevIsBackgroundDark) => !prevIsBackgroundDark);
          };

            const backgroundColorStyle = {
                backgroundColor: isBackgroundDark ? '#333' : '#fff',
                    height: '100vh',
                        display: 'flex',
                            justifyContent: 'center',
                                alignItems: 'center',
                                    transition: 'background-color 0.3s ease',
                                      };

                                        return (
                                            <div style={backgroundColorStyle}>
                                                  <button onClick={toggleBackgroundColor}>
                                                          Toggle Background Color
                                                                </button>
                                                                    </div>
                                                                      );
                                                                      }

                                                                      export default App;
                                                                      