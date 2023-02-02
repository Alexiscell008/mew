import React, { useState, useEffect }  from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function AppFooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://facebook.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://google.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://instagram.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://linkedin.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='star' className='me-3' />
                AGCS IT Solutions
              </h6>
              <p>
                Our business have the experience you need to help you along. Try us and we will never let you down!.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Projects</h6>
              <p>
                <a href='https://app.agcs.tech' className='text-reset'>
                  Project Management App
                </a>
              </p>
              <p>
                <a href='https://alexisconde.com' className='text-reset'>
                  Porfolio
                </a>
              </p>
              <p>
                <a href='https://project1-tau-three.vercel.app/' className='text-reset'>
                  WD26P-Project 1
                </a>
              </p>
              <p>
                <a href='https://project-2-drab.vercel.app/' className='text-reset'>
                WD26P-Project 2
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://bootstrap.com' className='text-reset'>
                  Bootstrap
                </a>
              </p>
              <p>
                <a href='https://reactjs.org/' className='text-reset'>
                  React Js
                </a>
              </p>
              <p>
                <a href='https://nodejs.org/' className='text-reset'>
                  Node Js
                </a>
              </p>
              <p>
                <a href='https://digitalocean.com' className='text-reset'>
                  Digital Ocean
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Giporlos E. Samar, 6811, PH
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                alexiscellconde@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 63 917 116 5529
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2022 AGCS IT Solutions. All Right Reserved.
      </div>



    </MDBFooter>
  );
}

// Chat API 
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6349f74b54f06e12d89a4297/1gfces0gl';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
// Chat API
