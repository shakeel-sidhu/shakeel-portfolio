import React from 'react';
import { Link } from 'react-router-dom';
import Experiences from './Experiences'

function Main() {
  return (
    <div>
      <main>
        <section className="md:flex md:justify-center md:items-end lg:items-center lg:relative lg:gap-x-24 xl:max-w-screen-2xl xl:mx-auto">
          <div>
            <div className="xs:pr-1 pt-8 px-4 md:px-8 md:flex-shrink-0 lg:py-24">
              <span className="inline-block text-xs lg:text-base lg:pb-2">
                The only value proposition that really matters:
              </span>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                It’s Time for a Switch-Up
              </h1>
              <p className="text-sm opacity-75 mt-4 mb-8 md:text-base md:w-3/4 lg:text-xl">
                You can focus on running your business while I focus on growing it.
              </p>

              <Link
                to="/contact"
                className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md mb-8"
              >
                <span className="text-lg opacity-75">Get Started</span>
              </Link>

              <div className="relative flex items-center my-4">
                <div className="inline-block z-10 pl-2">
                  <div className="inline-block rounded-full border-2 border-white">
                    <img
                      className="h-8"
                      src={`${process.env.PUBLIC_URL}/assets/images/avatar_1.png`}
                      alt="Avatar 1"
                    />
                  </div>
                  <div className="inline-block rounded-full -ml-3 border-2 border-white">
                    <img
                      className="h-8"
                      src={`${process.env.PUBLIC_URL}/assets/images/avatar_2.png`}
                      alt="Avatar 2"
                    />
                  </div>
                  <div className="inline-block rounded-full -ml-3 border-2 border-white">
                    <img
                      className="h-8"
                      src={`${process.env.PUBLIC_URL}/assets/images/avatar_3.png`}
                      alt="Avatar 3"
                    />
                  </div>
                  <div className="hidden md:inline-block rounded-full -ml-3 border-2 border-white">
                    <img
                      className="h-8"
                      src={`${process.env.PUBLIC_URL}/assets/images/avatar_4.png`}
                      alt="Avatar 4"
                    />
                  </div>
                  <div className="hidden md:inline-block rounded-full -ml-3 border-2 border-white">
                    <img
                      className="h-8"
                      src={`${process.env.PUBLIC_URL}/assets/images/avatar_5.png`}
                      alt="Avatar 5"
                    />
                  </div>
                </div>

                <div className="inline-block z-10 ml-2">
                  <span className="font-bold">10+</span>
                  <span className="text-xs md:text-sm lg:text-base">Happy Clients</span>
                </div>

                <div className="absolute h-1 w-56 md:w-72 bg-accent mt-3 rounded-r"></div>
              </div>
            </div>
          </div>

          <div className="h-80 lg:h-full">
            <div className="pointer-events-none absolute h-full overflow-hidden right-0 lg:w-full">
              <div className="h-80 overflow-hidden -mb-8 -mr-12 md:-mr-96 z-0 lg:h-full lg:relative">
                <img
                  className="lg:absolute lg:right-1/6 lg:transform lg:scale-75"
                  src={`${process.env.PUBLIC_URL}/assets/images/main_accent_bg.png`}
                  alt="Big accent coloured blob"
                />
              </div>
            </div>

            <div className="relative z-10 h-full flex items-end md:-ml-20 overflow-hidden">
              <div className="inline-block lg:pt-40">
                <img
                  className="w-64 lg:w-96"
                  src={`${process.env.PUBLIC_URL}/assets/images/hero_image.png`}
                  alt="Ecstatic hero client"
                />
              </div>

              <div className="md:hidden opacity-75 mb-8 flex flex-col">
                <a href="#" className="p-2">
                  <svg
                    className="w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Email</title>
                    <path
                      d="M20 18H18V9.25L12 13L6 9.25V18H4V6H5.2L12 10.25L18.8 6H20V18ZM20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z"
                      fill="black"
                    />
                  </svg>
                </a>

                <a href="#" className="p-2">
                  <svg
                    className="w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path
                      d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                      fill="black"
                    />
                  </svg>
                </a>

                <a href="#" className="p-2">
                  <svg
                    className="w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path
                      d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="#services" className="leading-loose relative">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/bubbles_banner.png`}
              alt="Green and red bubble banner. "
            />
          </div>

          <div className="text-center pt-8 pb-24 px-4 md:pt-12 lg:flex lg:flex-col lg:items-center lg:pb-48">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              How I'll{' '}
              <div className="relative inline-block z-20">
                <div className="relative z-10">Help</div>
                <div className="absolute bottom-1 bg-accent h-3 w-full transform -rotate-6"></div>
              </div>{' '}
              in Your Business
            </h2>

            <div className="text-left mt-10 grid gap-y-12 md:grid-cols-2 md:gap-x-12 md:px-16 lg:gap-x-20 lg:mt-16">
              <div>
                <div>
                  <svg
                    className="-ml-2"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36.6594 13.9307C40.0852 17.704 43.1412 22.1991 42.5137 27.1822C41.904 32.0241 38.038 35.6801 33.6578 37.7677C29.8669 39.5743 25.6946 38.2591 21.5771 37.1604C16.7404 35.8698 11.0751 35.4647 8.61113 31.0845C5.7926 26.0741 6.26323 19.777 9.03883 14.8715C11.9258 9.76915 17.0741 5.877 22.9877 5.67559C28.5241 5.48703 32.89 9.77899 36.6594 13.9307Z"
                      fill="#E0082D"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M28.6897 27.5647C29.0794 27.9523 29.0794 28.5839 28.6897 28.9715L27.2562 30.405L27.2583 30.403C26.8789 30.7824 26.2267 31.4345 25.3039 32.3553C24.8691 32.7798 24.1657 32.7757 23.735 32.3451L15.6591 24.2752C15.5557 24.1726 15.4737 24.0506 15.4178 23.9161C15.3618 23.7817 15.333 23.6375 15.333 23.4918C15.333 23.3462 15.3618 23.202 15.4178 23.0676C15.4737 22.9331 15.5557 22.8111 15.6591 22.7084L23.733 14.6407C23.9412 14.4329 24.2233 14.3161 24.5174 14.3161C24.8116 14.3161 25.0937 14.4329 25.3018 14.6407L28.6877 18.0245C29.0773 18.4121 29.0773 19.0437 28.6877 19.4313C28.5005 19.6175 28.2473 19.722 27.9832 19.722C27.7192 19.722 27.4659 19.6175 27.2788 19.4313L24.7153 16.8637C24.6087 16.7571 24.4426 16.7571 24.3359 16.8637L17.8862 23.3073C17.7796 23.4139 17.7796 23.58 17.8862 23.6867L24.3339 30.1302C24.3421 30.1384 24.3523 30.1446 24.3605 30.1528C24.4672 30.2369 24.6148 30.2287 24.7133 30.1302L27.2808 27.5647C27.6705 27.175 28.3021 27.175 28.6897 27.5647V27.5647ZM22.3795 23.4508C22.3795 22.8732 22.6092 22.3192 23.018 21.9108C23.4268 21.5023 23.9813 21.2729 24.5595 21.2729C25.1376 21.2729 25.6921 21.5023 26.1009 21.9108C26.5098 22.3192 26.7394 22.8732 26.7394 23.4508C26.7394 24.0284 26.5098 24.5824 26.1009 24.9908C25.6921 25.3993 25.1376 25.6287 24.5595 25.6287C23.9813 25.6287 23.4268 25.3993 23.018 24.9908C22.6092 24.5824 22.3795 24.0284 22.3795 23.4508ZM33.3758 24.2424L30.8554 26.7505C30.4657 27.1381 29.8341 27.1381 29.4465 26.7485C29.3538 26.6562 29.2803 26.5466 29.2302 26.4259C29.18 26.3052 29.1542 26.1758 29.1542 26.0451C29.1542 25.9143 29.18 25.7849 29.2302 25.6642C29.2803 25.5435 29.3538 25.4339 29.4465 25.3416L31.1486 23.6415C31.2553 23.5349 31.2553 23.3688 31.1486 23.2621L29.4711 21.5867C29.3784 21.4944 29.3049 21.3848 29.2548 21.2641C29.2046 21.1434 29.1788 21.014 29.1788 20.8832C29.1788 20.7525 29.2046 20.6231 29.2548 20.5024C29.3049 20.3817 29.3784 20.272 29.4711 20.1798C29.6582 19.9936 29.9115 19.8891 30.1755 19.8891C30.4395 19.8891 30.6928 19.9936 30.88 20.1798L33.3778 22.6756C33.4808 22.7785 33.5624 22.9007 33.6181 23.0352C33.6737 23.1697 33.7023 23.3139 33.7021 23.4594C33.7019 23.605 33.673 23.7491 33.617 23.8835C33.561 24.0178 33.479 24.1398 33.3758 24.2424V24.2424Z"
                      fill="#E0082D"
                    />
                  </svg>
                </div>

                <h3 className="mb-2 font-medium">
                  <b className="font-black">Designs</b> that impress
                </h3>

                <p className="leading-relaxed">
					        Good design’s not about what medium you’re working in. It’s about thinking hard about what you want to do and what you have to work with before you start. Because Information is only useful when it can be understood.
                </p>
              </div>
              
              <div>
                <div>
                  <svg
                    className="-ml-2"
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.7129 15.3792C40.775 19.5094 43.3937 24.3272 42.2659 29.2669C41.17 34.0667 36.9238 37.3506 32.3181 39.0086C28.332 40.4436 24.275 38.7064 20.2512 37.192C15.5247 35.4132 9.87798 34.4405 7.84205 29.7972C5.51318 24.4857 6.61476 18.2113 9.89123 13.564C13.2991 8.7304 18.8563 5.33752 24.8129 5.72616C30.3896 6.09 34.3437 10.8348 37.7129 15.3792Z"
                      fill="#E0082D"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M27.1089 15V34L31.7107 30.1311V17.641L27.1089 15ZM24.9697 29.8503L21.2662 31.5573V16.6518L24.9697 17.8084V29.8503ZM16.2921 29.4109L19.1248 28.6224V19.1076L16.3033 18.6278L16.2921 29.4109Z"
                      fill="#E0082D"
                    />
                  </svg>
                </div>

                <h3 className="mb-2 font-medium">
                  <b className="font-black">Build Features</b> that matter
                </h3>

                <p className="leading-relaxed">
                  A business or a product isn’t really a business or a product unless it does something valuable. The quickest way to failure is to build something nobody wants, needs or cares about. Features should be little bundles of value. In order to create value in digital products, you need features.
                </p>
              </div>

              <div>
                <div>
                  <svg
                    className="-ml-2"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.5851 15.6051C40.5143 19.7871 42.985 24.6399 41.7332 29.5134C40.5168 34.2489 36.2136 37.3952 31.5971 38.9179C27.6017 40.2357 23.6207 38.4025 19.6668 36.7915C15.0223 34.8991 9.44279 33.7823 7.546 29.1183C5.37629 23.7832 6.63781 17.584 10.0148 13.0583C13.5273 8.35111 19.1348 5.13173 25.0376 5.677C30.5639 6.18748 34.3621 11.0036 37.5851 15.6051Z"
                      fill="#E0082D"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M21.2729 20.875C21.8021 20.2345 22.6033 19.825 23.5 19.825C24.3967 19.825 25.1978 20.2345 25.727 20.875C26.0754 21.2974 26.2965 21.8102 26.3646 22.3536C26.4326 22.8969 26.3447 23.4484 26.1112 23.9437C25.8777 24.4389 25.5082 24.8576 25.0457 25.1509C24.5833 25.4441 24.047 25.5998 23.4994 25.5998C22.9519 25.5998 22.4156 25.4441 21.9531 25.1509C21.4907 24.8576 21.1212 24.4389 20.8877 23.9437C20.6541 23.4484 20.5663 22.8969 20.6343 22.3536C20.7023 21.8102 20.9235 21.2974 21.2719 20.875H21.2729Z"
                      fill="#E0082D"
                    />
                    <path
                      d="M27.4375 22.7125C27.4375 22.0489 27.2737 21.4231 26.9839 20.875H31.375C31.7927 20.875 32.1933 21.0409 32.4887 21.3363C32.7841 21.6317 32.95 22.0323 32.95 22.45V22.975C32.95 24.6413 31.6837 26.3476 29.4692 26.9482C29.2417 26.5394 28.909 26.1989 28.5056 25.9618C28.1022 25.7248 27.6429 25.5999 27.175 25.6H26.1775C26.5755 25.2318 26.8929 24.7851 27.1097 24.2881C27.3266 23.7912 27.4382 23.2547 27.4375 22.7125Z"
                      fill="#E0082D"
                    />
                    <path
                      d="M27.175 26.65C27.382 26.6494 27.587 26.6898 27.7784 26.7687C27.9697 26.8477 28.1436 26.9637 28.2899 27.11C28.4363 27.2564 28.5523 27.4302 28.6312 27.6216C28.7102 27.8129 28.7506 28.018 28.75 28.225V28.75C28.75 30.8195 26.797 32.95 23.5 32.95C20.203 32.95 18.25 30.8195 18.25 28.75V28.225C18.2495 28.018 18.2898 27.8129 18.3688 27.6216C18.4477 27.4302 18.5637 27.2564 18.7101 27.11C18.8564 26.9637 19.0303 26.8477 19.2216 26.7687C19.413 26.6898 19.618 26.6494 19.825 26.65H27.175Z"
                      fill="#E0082D"
                    />
                    <path
                      d="M14.0499 22.975C14.0499 24.6413 15.3162 26.3476 17.5307 26.9482C17.7582 26.5394 18.0909 26.1989 18.4943 25.9618C18.8977 25.7248 19.3571 25.5999 19.8249 25.6H20.8224C20.4244 25.2318 20.107 24.7851 19.8902 24.2881C19.6733 23.7912 19.5617 23.2547 19.5624 22.7125C19.5624 22.0489 19.7262 21.4231 20.0171 20.875H15.6249C15.2072 20.875 14.8066 21.0409 14.5112 21.3363C14.2159 21.6317 14.0499 22.0323 14.0499 22.45V22.975Z"
                      fill="#E0082D"
                    />
                    <path
                      d="M22.1874 16.9375C22.1874 16.1717 21.8831 15.4372 21.3416 14.8957C20.8001 14.3542 20.0657 14.05 19.2999 14.05C18.534 14.05 17.7996 14.3542 17.2581 14.8957C16.7166 15.4372 16.4124 16.1717 16.4124 16.9375C16.4124 17.7033 16.7166 18.4377 17.2581 18.9793C17.7996 19.5208 18.534 19.825 19.2999 19.825C20.0657 19.825 20.8001 19.5208 21.3416 18.9793C21.8831 18.4377 22.1874 17.7033 22.1874 16.9375Z"
                      fill="#E0082D"
                    />
                    <path
                      d="M30.5875 16.9375C30.5875 16.1717 30.2833 15.4372 29.7418 14.8957C29.2003 14.3542 28.4658 14.05 27.7 14.05C26.9342 14.05 26.1997 14.3542 25.6582 14.8957C25.1167 15.4372 24.8125 16.1717 24.8125 16.9375C24.8125 17.7033 25.1167 18.4377 25.6582 18.9793C26.1997 19.5208 26.9342 19.825 27.7 19.825C28.4658 19.825 29.2003 19.5208 29.7418 18.9793C30.2833 18.4377 30.5875 17.7033 30.5875 16.9375Z"
                      fill="#E0082D"
                    />
                  </svg>
                </div>

                <h3 className="mb-2 font-medium">
                  Maintain your <b className="font-black">Successful Website</b>
                </h3>

                <p className="leading-relaxed">
                  A successful website does three things:<br />
                  It attracts the right kinds of visitors.<br />
                  Guides them to the main services or product you offer.<br />
                  Collect Contact details for future ongoing relation
                </p>
              </div>

              <div>
                <div>
                  <svg
                    className="-ml-2"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.9876 21.5796C27.7119 21.5796 27.4777 21.4698 27.2853 21.2502C27.0928 21.0305 26.9965 20.7604 26.9965 20.4398V17.0203H23.001V30.6983H24.9987C25.2693 30.6983 25.5034 30.8111 25.7011 31.0367C25.8988 31.2623 25.9976 31.5324 25.9976 31.8471C25.9976 32.1617 25.8988 32.4289 25.7011 32.6485C25.5034 32.8682 25.2693 32.978 24.9987 32.978H19.0054C18.7245 32.978 18.4878 32.8682 18.2953 32.6485C18.1028 32.4289 18.0065 32.1617 18.0065 31.8471C18.0065 31.5324 18.1028 31.2623 18.2953 31.0367C18.4878 30.8111 18.7245 30.6983 19.0054 30.6983H21.0032V17.0203H17.0077V20.4398C17.0077 20.7604 16.9088 21.0305 16.7111 21.2502C16.5134 21.4698 16.2767 21.5796 16.001 21.5796C15.7252 21.5796 15.4911 21.4698 15.2986 21.2502C15.1061 21.0305 15.0099 20.7604 15.0099 20.4398V15.8804C15.0099 15.5717 15.1061 15.3046 15.2986 15.079C15.4911 14.8534 15.7278 14.7406 16.0088 14.7406H27.9954C28.2347 14.7406 28.3544 14.7703 28.3544 14.8297C28.5521 14.9128 28.7081 15.0493 28.8226 15.2393C28.9371 15.4293 28.9943 15.643 28.9943 15.8804V20.4398C28.9943 20.7604 28.8954 21.0305 28.6977 21.2502C28.5 21.4698 28.2633 21.5796 27.9876 21.5796Z"
                      fill="#E0082D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0006 12.7441C15.2983 8.83367 19.3634 5.19509 24.4042 5.15598C29.3023 5.11797 33.4541 8.47731 36.114 12.557C38.416 16.0877 37.663 20.4136 37.1181 24.6561C36.4781 29.6397 36.8292 35.3296 32.7997 38.364C28.1903 41.8349 21.8631 42.205 16.6134 40.0968C11.1532 37.904 6.59575 33.3004 5.60813 27.4442C4.68352 21.9615 8.3721 17.0467 12.0006 12.7441Z"
                      fill="#E0082D"
                      fillOpacity="0.08"
                    />
                  </svg>
                </div>

                <h3 className="mb-2 font-medium">
                  <b className="font-black">Secure</b> your business
                </h3>

                <p className="leading-relaxed">
                  Keeping your website secure is a crucial step in ensuring that the technology you use is safe. The longer you let your website go between updates, the more time attackers have to find vulnerabilities in the applications.
                  Let us help you to secure your website.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Experiences />

        <div className="overflow-hidden">
          <section id="testimonials" className="relative lg:mb-16 xl:mb-0">
            <div className="relative z-20">
              <h2 className="pt-8 text-2xl font-bold text-center md:text-3xl lg:text-4xl lg:py-16">
                What the{' '}
                <div className="relative inline-block z-20">
                  <div className="relative z-10">Clients</div>
                  <div className="absolute bottom-2 bg-accent h-3 w-full transform -rotate-3"></div>
                </div>{' '}
                are saying
              </h2>

              <div className="lg:flex lg:justify-center">
                <div className="py-24 relative z-20 md:px-20 md:pt-16 lg:flex lg:flex-wrap lg:max-w-screen lg:pt-8 lg:justify-center lg:gap-12">
                  <div className="relative border border-opacity-5 border-b-0 shadow-md mx-4 mb-24 grid grid-cols-8 px-4 py-8 bg-white md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0">
                    <p className="text-sm col-start-1 col-end-6 z-10 italic md:hidden lg:text-lg">
                      "My company is very happy with your work (
                      <span className="font-medium text-accent2">Big Thanks</span> to you). You will
                      be my
                      <span className="font-medium text-accent2"> first choice</span> if you have
                      time. And then only I will go to other developers."
                    </p>

                    <p className="text-sm col-start-1 col-end-6 z-10 italic hidden md:inline-block md:px-3 lg:text-lg">
                      "My company is very happy with your work (
                      <span className="font-medium text-accent2">Big Thanks</span> to you). You will
                      be my
                      <span className="font-medium text-accent2"> first choice</span> if you have
                      time. And then only I will go to other developers."
                    </p>

                    <div className="relative col-start-6 col-end-9 overflow-visible">
                      <img
                        className="absolute bottom-0 right-0 -mb-8 md:h-56"
                        src={`${process.env.PUBLIC_URL}/assets/images/testim_1.png`}
                        alt="Portait of a grey shirted man"
                      />
                    </div>

                    <div className="absolute w-full h-full overflow-hidden">
                      <img
                        className="relative w-32 top-5 -left-10"
                        src={`${process.env.PUBLIC_URL}/assets/images/accent_bubble-3.png`}
                        alt="Green decorative corner bubble"
                      />
                    </div>
                  </div>

                  <div className="relative border border-opacity-5 border-b-0 shadow-md mx-4 mb-24 grid grid-cols-8 px-4 py-8 bg-white md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0">
                    <p className="text-sm col-start-4 col-end-10 z-10 italic md:hidden lg:text-lg">
                      "Excellent work Zeeshan! Thank you so much for{' '}
                      <span className="font-medium text-accent2"> solving my problem</span>. I was
                      scratching my head to resolve this issue. You saved me."
                    </p>

                    <p className="text-sm col-start-4 col-end-10 z-10 italic hidden md:inline-block md:px-3 lg:text-lg">
                      "Excellent work Zeeshan! Thank you so much for{' '}
                      <span className="font-medium text-accent2"> solving my problem</span>. I was
                      scratching my head to resolve this issue. You saved me."
                    </p>

                    <div className="relative col-start-1 col-end-4 overflow-visible">
                      <img
                        className="absolute bottom-0 right-0 -mb-8 md:h-64 md:left-0 xl:w-72"
                        src={`${process.env.PUBLIC_URL}/assets/images/testim_2.png`}
                        alt="Portait of a grey shirted man"
                      />
                    </div>

                    <div className="absolute w-full h-full overflow-hidden">
                      <img
                        className="absolute inline-block -top-20 -right-10 w-32"
                        src={`${process.env.PUBLIC_URL}/assets/images/accent_bubble-3.png`}
                        alt="Green decorative corner bubble"
                      />
                    </div>
                  </div>

                  <div className="relative border border-opacity-5 border-b-0 shadow-md mx-4 mb-24 grid grid-cols-8 px-4 py-8 bg-white md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0">
                    <p className="text-sm col-start-1 col-end-6 z-10 italic md:hidden lg:text-lg">
                      "Awesome...! It works like a charm. I am{' '}
                      <span className="font-medium text-accent2"> 100% satisfied</span> with your
                      work. I'll be more happy to work with you in near future."
                    </p>

                    <p className="text-sm col-start-1 col-end-6 z-10 italic hidden md:inline-block md:px-3 lg:text-lg">
                      "Awesome...! It works like a charm. I am{' '}
                      <span className="font-medium text-accent2"> 100% satisfied</span> with your
                      work. I'll be more happy to work with you in near future."
                    </p>

                    <div className="relative col-start-6 col-end-9 overflow-visible">
                      <img
                        className="absolute bottom-0 right-0 -mb-8 md:h-60"
                        src={`${process.env.PUBLIC_URL}/assets/images/testim_3.png`}
                        alt="Portait of a woman."
                      />
                    </div>

                    <div className="absolute w-full h-full overflow-hidden">
                      <img
                        className="relative w-32 -top-10 -left-10 transform rotate-270"
                        src={`${process.env.PUBLIC_URL}/assets/images/accent_bubble-3.png`}
                        alt="Green decorative corner bubble"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute ml-8 top-0 bottom-0 w-1 border-l-2 border-accent z-10 lg:hidden"></div>
          </section>

          <section id="contact" className="relative mb-8 md:flex md:justify-center md:pb-16">
            <div className="relative z-20">
              <h2 className="relative text-2xl font-bold text-center my-16 md:text-left md:pl-12 md:text-3xl xl:pl-0 xl:text-center">
                Let's Get to Work Today
              </h2>

              <div className="px-12">
                <form
                  name="contact"
                  data-netlify="true"
                  autoComplete="off"
                  netlify-honeypot="bot-field"
                  className="md:h-full md:flex md:items-end md:gap-x-6"
                >
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="md:flex md:gap-x-4">
                    <div className="md:flex md:flex-col md:gap-y-4">
                      <div className="border-2 py-3 px-2 mb-4 border-black md:mb-0 bg-white">
                        <input
                          className="bg-transparent placeholder-black"
                          type="text"
                          id="name"
                          name="name"
                          required
                          pattern="\S+.*"
                          placeholder="Name..."
                        />
                      </div>
                      <div className="border-2 py-3 px-2 mb-4 border-black md:mb-0 bg-white">
                        <input
                          className="bg-transparent placeholder-black"
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Email..."
                        />
                      </div>
                    </div>

                    <div className="border-2 py-3 px-2 mb-8 border-black md:mb-0 bg-white">
                      <textarea
                        className="h-full bg-transparent placeholder-black"
                        name="question"
                        placeholder="Your Question"
                        id="question"
                        cols="30"
                        minLength="10"
                        maxLength="100"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="relative md:flex md:flex-col md:items-center">
                    <button
                      type="submit"
                      id="submit-button"
                      className="inline-block uppercase font-medium px-6 py-2 bg-black text-white shadow-md"
                    >
                      Send
                    </button>

                    <span
                      id="success"
                      className="hidden absolute px-2 mx-1 py-2 font-medium border italic rounded-sm border-black bg-accent text-black top-0 md:px-4 md:mx-0 md:w-max md:-top-12 md:left-0"
                    >
                      We'll be in touch!
                    </span>
                    <span
                      id="error"
                      className="hidden absolute px-2 mx-1 py-2 font-medium border italic rounded-sm border-black bg-accent2Light text-black top-0 md:px-4 md:mx-0 md:w-max md:-top-12 md:left-0"
                    >
                      Whoops... Something went wrong.
                    </span>

                    <div className="opacity-75 mt-2 md:mt-0">
                      <a href="#" className="p-2 pl-0 inline-block md:pb-0">
                        <svg
                          className="w-4"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Email</title>
                          <path
                            d="M20 18H18V9.25L12 13L6 9.25V18H4V6H5.2L12 10.25L18.8 6H20V18ZM20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z"
                            fill="black"
                          />
                        </svg>
                      </a>

                      <a href="#" className="p-2 inline-block md:pb-0">
                        <svg
                          className="w-4"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Twitter</title>
                          <path
                            d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                      <a href="#" className="p-2 inline-block md:pb-0 md:pr-0">
                        <svg
                          className="w-4"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Facebook</title>
                          <path
                            d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <img
              className="absolute transform scale-200 top-20 z-10 md:scale-175 md:top-40 md:right-20 lg:top-112 xl:scale-75 xl:top-auto xl:bottom-auto"
              src={`${process.env.PUBLIC_URL}/assets/images/accent_bubble-contact.png`}
              alt="Green decorative background"
            />

            <img
              className="absolute transform scale-200 top-40 left-60 z-0 md:scale-150 md:top-20 md:left-80 lg:top-32 lg:right-0 lg:left-auto xl:opacity-90 xl:top-48"
              src={`${process.env.PUBLIC_URL}/assets/images/accent_bubble-2-contact.png`}
              alt="Red decorative background"
            />

            <div className="absolute ml-8 -top-60 bottom-0 w-1 border-l-2 border-accent z-10 md:hidden"></div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Main;
