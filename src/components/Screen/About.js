import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

export const About = ({user}) => {
  return (
    <>

      <Navbar user={user} />

      <div>
        {/* Title Page */}
        <section className="bg-img0 text-center p-lr-15 p-tb-92">
          <h2 className="ltext-105 cl0 txt-center">
            About Us
          </h2>
        </section>

        {/*Our Story*/}
        <section className="bg0 p-t-150">
          <div className="container">
            <div className="row p-b-100">
              <div className="col-md-7 col-lg-8">
                <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                  {/* Section Title */}
                  <h3 className="mtext-111 cl2 p-b-16">
                    Our Story
                  </h3>

                  <p className="stext-113 cl6 p-b-26">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                  </p>

                  <p className="stext-113 cl6 p-b-26">
                    Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis.
                  </p>

                  <div className="bor16 p-l-29 p-b-9 m-t-22">
                    <p className="stext-114 cl6 p-r-40">
                      “The only way to learn a new programming language is by writing programs in it.”
                    </p>

                    <span className="stext-111 cl8">
                      - Dennis Ritchie
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
                <div className="hov-img0">
                  <img src='https://firebasestorage.googleapis.com/v0/b/ecommerce-web-710e1.appspot.com/o/error-auth-images%2Four-story.jpg?alt=media&token=12a0b21f-762b-4dab-b8c9-da22f4ed09a7' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

