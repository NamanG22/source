import { useState } from 'react'
import './Footer.css'

function Footer() {
  const [openSections, setOpenSections] = useState({
    platform: false,
    solutions: false,
    resources: false,
    contact: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const LogoIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 1097 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1018.27 160L1033.26 124.925L998.881 38.3879H1025.91L1047.06 93.8092L1069.37 38.3879H1096.41L1045.43 160H1018.27Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M912.81 123.3C906.325 119.247 901.176 113.746 897.37 106.825L897.362 106.811L897.355 106.797C893.65 99.7345 891.82 91.6676 891.82 82.6386C891.82 73.5018 893.649 65.3783 897.355 58.3127L897.365 58.2946C901.169 51.2615 906.322 45.7511 912.819 41.8041C925.608 33.8153 946.646 32.5721 958.878 42.4156V0H984.669V126.555H960.55V121.365C948.019 132.137 926.508 131.617 912.828 123.311L912.81 123.3ZM956.873 70.1468C955.099 66.5989 952.671 63.8737 949.592 61.9232C946.542 59.9919 942.893 58.9954 938.579 58.9954C934.39 58.9954 930.732 59.9857 927.556 61.9295C924.481 63.8796 922.056 66.6028 920.284 70.1468L920.276 70.1642C918.52 73.572 917.611 77.657 917.611 82.4714C917.611 87.1664 918.517 91.2615 920.284 94.796C922.056 98.34 924.481 101.063 927.556 103.013C930.732 104.957 934.39 105.947 938.579 105.947C942.893 105.947 946.542 104.951 949.592 103.02C952.671 101.069 955.099 98.3439 956.873 94.796C958.641 91.2615 959.546 87.1664 959.546 82.4714C959.546 77.657 958.638 73.572 956.882 70.1641L956.873 70.1468Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M805.99 123.3C799.505 119.247 794.356 113.746 790.55 106.825L790.543 106.811L790.535 106.797C786.83 99.7345 785 91.6676 785 82.6386C785 73.5018 786.829 65.3783 790.535 58.3127L790.545 58.2945C794.35 51.2615 799.502 45.751 805.999 41.8041C818.788 33.8153 839.826 32.5721 852.058 42.4156V37.1191L877.849 37.1191V126.555H853.73V121.365C841.199 132.137 819.688 131.617 806.008 123.311L805.99 123.3ZM850.054 70.1468C848.28 66.5989 845.852 63.8737 842.772 61.9232C839.722 59.9919 836.073 58.9954 831.759 58.9954C827.57 58.9954 823.912 59.9856 820.736 61.9295C817.661 63.8796 815.237 66.6028 813.464 70.1468L813.456 70.1642C811.7 73.572 810.791 77.657 810.791 82.4714C810.791 87.1664 811.697 91.2614 813.464 94.7959C815.237 98.34 817.661 101.063 820.736 103.013C823.912 104.957 827.57 105.947 831.759 105.947C836.073 105.947 839.722 104.951 842.772 103.02C845.852 101.069 848.28 98.3438 850.054 94.7959C851.821 91.2614 852.727 87.1664 852.727 82.4714C852.727 77.657 851.818 73.5719 850.062 70.1641L850.054 70.1468Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M580.537 126.555V6.2804H631.811C644.04 6.2804 653.845 9.65915 661.018 16.5942C667.951 23.1943 671.532 31.9041 671.857 42.5685H671.881V45.7844H671.857C671.532 56.4486 667.951 65.1582 661.018 71.7583C657.678 74.9874 653.768 77.4455 649.308 79.1506L671.881 123.221L673.702 126.555H645.037L622.503 82.0725H605.492V126.555H580.537ZM580.537 29.7307V58.6222H629.637C635.184 58.6222 639.202 57.2915 641.932 54.8605C644.66 52.3213 646.089 48.8261 646.089 44.1764C646.089 39.5184 644.656 36.0916 641.944 33.67L641.932 33.6596L641.921 33.6489C639.19 31.1132 635.177 29.7307 629.637 29.7307H580.537Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M498.603 123.341L498.593 123.336C491.644 119.398 486.194 113.888 482.262 106.833C478.32 99.7602 476.373 91.6237 476.373 82.4713C476.373 73.3268 478.261 65.1967 482.085 58.1273L482.095 58.1095C486.023 51.0617 491.412 45.5523 498.249 41.6128C505.104 37.6622 513.026 35.7123 521.961 35.7123C530.797 35.7123 538.567 37.7232 545.211 41.8029C551.833 45.869 556.993 51.5607 560.687 58.8331C564.388 66.1211 566.212 74.5733 566.212 84.1436V88.823V92.2734L502.976 92.2734C503.433 93.7905 504.084 95.2541 504.929 96.6672C506.909 99.6801 509.453 102.12 512.578 103.997C515.785 105.856 519.238 106.783 522.965 106.783C526.195 106.783 529.356 105.829 532.473 103.856C535.576 101.89 538.005 99.2574 539.772 95.9312L540.802 93.8497L543.521 95.0776L563.412 103.366L562.723 104.878C559.142 112.732 553.859 118.786 546.874 122.978C540.011 127.164 532.022 129.23 522.965 129.23C513.812 129.23 505.676 127.283 498.603 123.341ZM503.123 71.1643H540.395C539.968 69.7681 539.384 68.4655 538.647 67.2521L538.636 67.2339L538.626 67.2154C536.99 64.3518 534.756 62.1716 531.905 60.6442L531.874 60.6279L531.844 60.6102C529.103 58.9856 525.99 58.1592 522.463 58.1592C518.476 58.1592 514.963 59.0485 511.884 60.793L511.867 60.8032L511.848 60.8129C508.765 62.4571 506.367 64.7548 504.624 67.7248C504.01 68.7997 503.509 69.9452 503.123 71.1643Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M702.53 123.341L702.52 123.336C695.571 119.398 690.122 113.888 686.189 106.833C682.247 99.7602 680.3 91.6237 680.3 82.4713C680.3 73.3268 682.188 65.1967 686.012 58.1273L686.022 58.1095C689.95 51.0617 695.34 45.5523 702.176 41.6128C709.031 37.6622 716.953 35.7123 725.889 35.7123C734.724 35.7123 742.494 37.7232 749.138 41.8029C755.76 45.869 760.92 51.5607 764.614 58.8331C768.316 66.1211 770.139 74.5733 770.139 84.1436V88.823V92.2734L706.903 92.2734C707.361 93.7905 708.011 95.2541 708.856 96.6672C710.836 99.6801 713.381 102.12 716.505 103.997C719.712 105.856 723.165 106.783 726.892 106.783C730.122 106.783 733.283 105.829 736.4 103.856C739.503 101.89 741.933 99.2574 743.7 95.9312L744.729 93.8497L747.448 95.0776L767.339 103.366L766.65 104.878C763.069 112.732 757.787 118.786 750.801 122.978C743.938 127.164 735.949 129.23 726.892 129.23C717.74 129.23 709.603 127.283 702.53 123.341ZM707.05 71.1643H744.322C743.895 69.7681 743.311 68.4655 742.575 67.2521L742.564 67.2339L742.553 67.2154C740.917 64.3518 738.683 62.1716 735.832 60.6442L735.801 60.6279L735.771 60.6102C733.03 58.9856 729.917 58.1592 726.39 58.1592C722.403 58.1592 718.89 59.0485 715.812 60.793L715.794 60.8032L715.776 60.8129C712.693 62.4571 710.294 64.7548 708.551 67.7248C707.938 68.7997 707.436 69.9452 707.05 71.1643Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M399.109 123.341L399.099 123.336C392.15 119.398 386.7 113.888 382.768 106.833C378.826 99.7602 376.879 91.6237 376.879 82.4713C376.879 73.3189 378.826 65.1824 382.768 58.1096C386.7 51.0549 392.15 45.5448 399.099 41.607L399.109 41.6014C406.182 37.6591 414.318 35.7123 423.471 35.7123C430.547 35.7123 436.889 36.8525 442.466 39.1728C448.17 41.388 452.96 44.8336 456.811 49.4987C460.767 54.1552 463.757 59.9347 465.814 66.7917L466.285 68.3615L445.932 74.0457L442.874 74.9439L442.169 72.9132C440.823 68.5635 438.361 65.1899 434.769 62.7269L434.747 62.7119L434.726 62.6963C431.187 60.0945 427.447 58.8281 423.471 58.8281C419.156 58.8281 415.507 59.8246 412.458 61.7559L412.442 61.7663L412.425 61.7763C409.368 63.6105 406.951 66.2663 405.181 69.8034C403.531 73.2096 402.67 77.4127 402.67 82.4713C402.67 87.4069 403.527 91.6173 405.185 95.1476C406.955 98.6807 409.374 101.397 412.441 103.343C415.493 105.17 419.148 106.115 423.471 106.115C426.495 106.115 429.283 105.542 431.853 104.411L431.864 104.407L431.874 104.402C434.568 103.262 436.887 101.665 438.847 99.6057C440.788 97.4555 442.171 94.9485 442.995 92.0632L443.593 90.0526L446.768 90.897L467.121 96.5811L466.65 98.151C464.592 105.012 461.599 110.795 457.639 115.453C453.681 120.11 448.842 123.608 443.142 125.934L443.129 125.939L443.116 125.944C437.43 128.149 430.871 129.23 423.471 129.23C414.318 129.23 406.182 127.283 399.109 123.341Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M315.166 126.555V38.3879H339.285C339.285 45.1648 339.285 43.2876 339.285 43.2876C346.143 38.3879 355.825 38.3879 363.263 38.3879H372.73V61.5038H359.918C355.917 61.5038 352.526 62.3434 349.69 63.9612C346.983 65.5682 344.852 67.9353 343.305 71.1314L343.296 71.1502C341.76 74.2223 340.957 77.9772 340.957 82.4714V126.555H315.166Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M298.248 38.3879V126.555H274.129V121.403C262.375 129.535 242.611 131.728 229.854 125.208L229.842 125.202L229.829 125.195C224.538 122.373 220.312 118.256 217.159 112.884L217.149 112.867L217.139 112.849C214.078 107.315 212.59 100.622 212.59 92.8394V38.3879H238.381V85.6487C238.381 95.0835 240 104.947 254.161 104.947C267.5 104.947 272.457 93.066 272.457 81.3008V38.3879H298.248Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M129.014 123.328L129 123.32C122.174 119.27 116.79 113.71 112.864 106.666C108.924 99.596 106.975 91.5161 106.975 82.4713C106.975 73.4266 108.924 65.3467 112.864 58.2768C116.792 51.2302 122.18 45.7215 129.014 41.7821C135.978 37.7211 143.955 35.7123 152.898 35.7123C161.836 35.7123 169.759 37.719 176.615 41.7821C183.557 45.7193 189.002 51.2268 192.932 58.2768C196.872 65.3467 198.821 73.4266 198.821 82.4713C198.821 91.5161 196.872 99.596 192.932 106.666C189.002 113.717 183.557 119.278 176.618 123.326L176.611 123.33C169.755 127.28 161.834 129.23 152.898 129.23C143.961 129.23 135.989 127.28 129.028 123.336L129.014 123.328ZM163.572 61.7532L163.555 61.7424C160.623 59.821 157.094 58.8281 152.898 58.8281C148.702 58.8281 145.173 59.821 142.241 61.7424L142.224 61.7532L142.207 61.7636C139.265 63.5902 136.954 66.239 135.289 69.7779C133.626 73.3117 132.767 77.5278 132.767 82.4713C132.767 87.4149 133.626 91.631 135.289 95.1648C136.954 98.7031 139.268 101.416 142.224 103.357C145.158 105.173 148.694 106.115 152.898 106.115C157.102 106.115 160.638 105.173 163.572 103.357C166.528 101.416 168.842 98.7031 170.507 95.1648C172.17 91.631 173.029 87.4149 173.029 82.4713C173.029 77.5278 172.17 73.3117 170.507 69.7779C168.842 66.239 166.531 63.5902 163.589 61.7636L163.572 61.7532Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.4954 124.75L26.4863 124.746C19.697 121.754 13.9784 117.542 9.3548 112.109L9.34292 112.095L9.33136 112.081C4.81426 106.522 1.80803 100.096 0.30878 92.8301L0 91.3337L22.3909 85.5084L25.1811 84.8165L25.7848 86.8912C27.2829 90.6364 29.2519 93.875 31.6836 96.6238C34.1004 99.3558 36.9267 101.447 40.1713 102.913C43.4073 104.374 46.9148 105.111 50.7136 105.111C54.4504 105.111 57.6289 104.524 60.2879 103.399L60.3077 103.391C63.1129 102.248 65.2078 100.726 66.6759 98.8668L66.6823 98.8586C68.2441 96.9065 69.0056 94.7503 69.0056 92.3379C69.0056 89.5203 68.0538 87.2744 66.1615 85.4768L66.1466 85.4626L66.132 85.4481C64.3105 83.6265 61.1794 82.0485 56.5025 80.8521L56.4988 80.8511L36.432 75.6672C25.8482 72.9358 17.6177 68.4013 11.8871 61.969C6.16464 55.5458 3.28568 48.0311 3.28568 39.4944C3.28568 32.407 5.09154 26.1227 8.74422 20.7026C12.3772 15.3118 17.4049 11.1171 23.7719 8.10723L23.782 8.10247C30.2724 5.08904 37.7012 3.6051 46.0313 3.6051C54.0179 3.6051 61.2085 4.97438 67.5727 7.75055C74.0362 10.5214 79.3773 14.5188 83.5627 19.7453C87.8737 24.8772 90.7089 31.0388 92.0921 38.1855L92.3902 39.7257L71.4792 44.3114L68.5486 44.8864L68.0522 42.7351C66.8027 37.8412 64.2852 34.1762 60.5159 31.6293C56.7173 29.0627 51.868 27.7243 45.8641 27.7243C40.7732 27.7243 36.8705 28.94 33.9976 31.2138C31.2138 33.5046 29.9132 36.1846 29.9132 39.3272C29.9132 42.2372 30.909 44.661 32.9271 46.6917C35.1137 48.6674 38.4504 50.2963 43.0853 51.482L43.0889 51.4829L63.1557 56.6668C73.7087 59.3903 81.8271 63.6882 87.3427 69.6703C92.8822 75.5663 95.6332 82.8807 95.6332 91.5018C95.6332 99.0348 93.716 105.709 89.8404 111.464C85.9756 117.203 80.5447 121.623 73.6146 124.741L73.6031 124.746C66.7783 127.754 58.8 129.231 49.7103 129.231C41.1611 129.231 33.4138 127.748 26.4954 124.75Z" fill="currentColor"></path>
    </svg>
  )

  const ChevronIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.10487 5.54846C4.35425 5.33025 4.73331 5.35552 4.95152 5.6049L7.69894 8.74481C7.85831 8.92694 8.14164 8.92694 8.301 8.74481L11.0484 5.6049C11.2666 5.35552 11.6457 5.33025 11.8951 5.54846C12.1445 5.76667 12.1697 6.14572 11.9515 6.3951L9.20409 9.53502C8.56664 10.2635 7.43331 10.2635 6.79585 9.53502L4.04843 6.3951C3.83022 6.14572 3.85549 5.76667 4.10487 5.54846Z" fill="currentColor"></path>
    </svg>
  )

  const FacebookIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16"></rect>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.2749 15V8.7H11.1876L11.5 5.9H9.2749V4.53623C9.2749 3.81523 9.29332 3.1 10.3008 3.1H11.3213V1.0981C11.3213 1.068 10.4447 1 9.55797 1C7.706 1 6.54638 2.16004 6.54638 4.29014V5.9H4.5V8.7H6.54638V15H9.2749Z" fill="currentColor"></path>
    </svg>
  )

  const LinkedInIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16"></rect>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 14.5H11.9V9.95063C11.9 8.70263 11.3495 8.00635 10.3621 8.00635C9.28765 8.00635 8.65 8.73188 8.65 9.95063V14.5H6.05V6.05H8.65V7.00024C8.65 7.00024 9.46574 5.56885 11.3039 5.56885C13.1428 5.56885 14.5 6.69097 14.5 9.01277V14.5ZM3.0873 4.69858C2.21045 4.69858 1.5 3.98232 1.5 3.09897C1.5 2.21627 2.21045 1.5 3.0873 1.5C3.9635 1.5 4.67395 2.21627 4.67395 3.09897C4.6746 3.98232 3.9635 4.69858 3.0873 4.69858ZM1.5 14.5H4.75V6.05H1.5V14.5Z" fill="currentColor"></path>
    </svg>
  )

  const InstagramIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16"></rect>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9123 1.49995H5.08741C3.10929 1.49995 1.49995 3.10936 1.49995 5.08748V10.9124C1.49995 12.8906 3.10929 14.5 5.08741 14.5H10.9123C12.8906 14.5 14.5 12.8905 14.5 10.9124V5.08748C14.5 3.10936 12.8906 1.49995 10.9123 1.49995ZM13.3466 10.9124C13.3466 12.2546 12.2546 13.3465 10.9124 13.3465H5.08741C3.74528 13.3466 2.65338 12.2546 2.65338 10.9124V5.08748C2.65338 3.74536 3.74528 2.65338 5.08741 2.65338H10.9123C12.2545 2.65338 13.3465 3.74536 13.3465 5.08748V10.9124H13.3466ZM7.99996 4.65034C6.15286 4.65034 4.65019 6.15302 4.65019 8.00011C4.65019 9.84713 6.15286 11.3497 7.99996 11.3497C9.84705 11.3497 11.3497 9.84713 11.3497 8.00011C11.3497 6.15302 9.84705 4.65034 7.99996 4.65034ZM7.99996 10.1962C6.78894 10.1962 5.80361 9.21105 5.80361 8.00003C5.80361 6.78894 6.78886 5.80369 7.99996 5.80369C9.21105 5.80369 10.1963 6.78894 10.1963 8.00003C10.1963 9.21105 9.21097 10.1962 7.99996 10.1962ZM10.8927 3.91992C11.0497 3.76228 11.268 3.67231 11.4902 3.67231C11.7132 3.67231 11.9316 3.76228 12.0885 3.91992C12.2461 4.07678 12.3361 4.29516 12.3361 4.51816C12.3361 4.74038 12.2461 4.95877 12.0885 5.1164C11.9308 5.27327 11.7132 5.364 11.4902 5.364C11.268 5.364 11.0496 5.27327 10.8927 5.1164C10.7351 4.95877 10.6444 4.74046 10.6444 4.51816C10.6444 4.29516 10.735 4.07678 10.8927 3.91992Z" fill="currentColor"></path>
    </svg>
  )

  return (
    <footer className="footer">
      <div className="div-block-29">
        <div className="div-block-30">
          <div className="div-block-66">
            <div className="code-embed-10-copy w-embed">
              <LogoIcon />
            </div>
          </div>
          <a 
            href="https://www.facebook.com/profile.php?id=61562078880143" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-block-6 w-inline-block"
          >
            <div className="code-embed-9 w-embed">
              <FacebookIcon />
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/company/sourceready/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-block-6 w-inline-block"
          >
            <div className="code-embed-9 w-embed">
              <LinkedInIcon />
            </div>
          </a>
          <a 
            href="https://www.instagram.com/sourceready" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-block-6 w-inline-block"
          >
            <div className="code-embed-9 w-embed">
              <InstagramIcon />
            </div>
          </a>
        </div>
        <div className="div-block-2697">
          <div className="text-block-81">
            Bringing you the latest insights on global supply chain trends to help you navigate product sourcing with confidence.
          </div>
          <div className="code-embed-15 w-embed w-iframe">
            <iframe 
              src="https://embeds.beehiiv.com/e21b6d03-4ffd-499e-8bf7-d7e9660ee84f?slim=true" 
              data-test-id="beehiiv-embed" 
              height="52" 
              frameBorder="0" 
              scrolling="no" 
              style={{ margin: '0px', borderRadius: '0px !important', backgroundColor: 'transparent' }}
              title="Newsletter subscription"
            ></iframe>
          </div>
        </div>
        <div className="div-block-63">
          {/* Desktop Navigation */}
          <div className="div-block-64">
            <div className="text-block-27">Platform</div>
            <a href="/" aria-current="page" className="link-block-102 w-inline-block w--current">
              <div className="text-block-28">Overview</div>
            </a>
            <a href="/supplier-discovery" className="link-block-102 w-inline-block">
              <div className="text-block-28">Supplier Discovery</div>
            </a>
            <a href="/product-ideation" className="link-block-102 w-inline-block">
              <div className="text-block-28">Product Ideation</div>
            </a>
            <a href="/supplier-outreach" className="link-block-102 w-inline-block">
              <div className="text-block-28">Supplier Outreach</div>
            </a>
            <a href="/quote-intelligence" className="link-block-102 w-inline-block">
              <div className="text-block-28">Quote Intelligence</div>
            </a>
            <a href="/pricing" className="link-block-102 w-inline-block">
              <div className="text-block-28">Pricing</div>
            </a>
            <div className="div-block-64-copy inside">
              <div className="text-block-27">Solutions</div>
              <a href="/category/apparel-footwear-suppliers" className="link-block-102 w-inline-block">
                <div className="text-block-28">Apparel &amp; Footwear</div>
              </a>
              <a href="/category/jewelry-suppliers" className="link-block-102 w-inline-block">
                <div className="text-block-28">Jewelry</div>
              </a>
              <a href="/category/consumer-electronics-suppliers" className="link-block-102 w-inline-block">
                <div className="text-block-28">Consumer Electronics</div>
              </a>
            </div>
          </div>
          <div className="div-block-64-copy">
            <a href="/category/beauty-and-personal-care" className="link-block-102 w-inline-block">
              <div className="text-block-28">Beauty &amp; Personal Care</div>
            </a>
            <a href="/category/food-and-beverage" className="link-block-102 w-inline-block">
              <div className="text-block-28">Food &amp; Beverages</div>
            </a>
            <a href="/category/all-categories" className="link-block-102 w-inline-block">
              <div className="text-block-28">All Categories</div>
            </a>
            <div className="divider-line"></div>
            <a href="/country/mexico" className="link-block-102 w-inline-block">
              <div className="text-block-28">Mexico</div>
            </a>
            <a href="/country/china" className="link-block-102 w-inline-block">
              <div className="text-block-28">China</div>
            </a>
            <a href="/country/vietnam" className="link-block-102 w-inline-block">
              <div className="text-block-28">Vietnam</div>
            </a>
            <a href="/country/india" className="link-block-102 w-inline-block">
              <div className="text-block-28">India</div>
            </a>
            <a href="/country/turkey" className="link-block-102 w-inline-block">
              <div className="text-block-28">Turkey</div>
            </a>
            <a href="/country/usa" className="link-block-102 w-inline-block">
              <div className="text-block-28">USA</div>
            </a>
            <a href="/country/italy" className="link-block-102 w-inline-block">
              <div className="text-block-28">Italy</div>
            </a>
            <a href="/country/indonesia" className="link-block-102 w-inline-block">
              <div className="text-block-28">Indonesia</div>
            </a>
          </div>
          <div className="div-block-64-copy outside">
            <a href="/country/indonesia" className="link-block-102 w-inline-block">
              <div className="text-block-28">Indonesia</div>
            </a>
            <a href="/country/germany" className="link-block-102 w-inline-block">
              <div className="text-block-28">Germany</div>
            </a>
            <a href="/country/philippines" className="link-block-102 w-inline-block">
              <div className="text-block-28">Philippines</div>
            </a>
            <div className="divider-line"></div>
            <a href="/company/importers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Importer</div>
            </a>
            <a href="/company/brand" className="link-block-102 w-inline-block">
              <div className="text-block-28">Consumer Brand</div>
            </a>
            <div className="div-block-64-copy inside">
              <div className="text-block-27">Resources</div>
              <a href="/blog" className="link-block-102 w-inline-block">
                <div className="text-block-28">Blog<br/></div>
              </a>
              <a href="/partner" className="link-block-102 w-inline-block">
                <div className="text-block-28">Partner</div>
              </a>
              <a href="/about-us" className="link-block-102 w-inline-block">
                <div className="text-block-28">About Us</div>
              </a>
              <a href="/career" className="link-block-102 w-inline-block">
                <div className="text-block-28">Career</div>
              </a>
            </div>
          </div>
          <div className="div-block-64-copy">
            <a href="https://help.sourceready.com/en" target="_blank" rel="noopener noreferrer" className="link-block-102 w-inline-block">
              <div className="text-block-28">Help Center<br/></div>
            </a>
            <div className="divider-line"></div>
            <a href="/competitor/competitor-alibaba" className="link-block-102 w-inline-block">
              <div className="text-block-28">SourceReady vs Alibaba<br/></div>
            </a>
            <a href="/competitor/competitor-global-sources" className="link-block-102 w-inline-block">
              <div className="text-block-28">SourceReady vs Global Sources<br/></div>
            </a>
            <a href="/competitor/competitor-importyeti" className="link-block-102 w-inline-block">
              <div className="text-block-28">SourceReady vs ImportYeti</div>
            </a>
            <a href="/competitor/competitor-importgenius" className="link-block-102 w-inline-block">
              <div className="text-block-28">SourceReady vs ImportGenius</div>
            </a>
            <a href="/competitor/competitor-chatgpt" className="link-block-102 w-inline-block">
              <div className="text-block-28">SourceReady vs ChatGPT</div>
            </a>
            <div className="divider-line"></div>
            <a href="https://www.sourceready.com/tariff-calculator" className="link-block-102 w-inline-block">
              <div className="text-block-28">Tariff Calculator</div>
            </a>
            <div className="div-block-64-copy inside">
              <div className="text-block-27">Contact us</div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScIQqZhgscEgCDsnn6-eIVzqq4vvIzuluXOUexwtJJgvwHclQ/viewform?usp=header" className="link-block-102 w-inline-block">
                <div className="text-block-28">Join as supplier</div>
              </a>
              <a href="tel:+1(855)-691-2549" className="link-block-102 w-inline-block">
                <div className="text-block-28">+1(855)-691-2549</div>
              </a>
              <a href="mailto:support@sourceready.com" className="link-block-102 w-inline-block">
                <div className="text-block-28">support@sourceready.com</div>
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="div-block-2792">
          <div 
            className="footer_platform_cell"
            onClick={() => toggleSection('platform')}
          >
            <div className="text-block-27-copy">Platform</div>
            <div className={`code-embed-919 w-embed ${openSections.platform ? 'open' : ''}`}>
              <ChevronIcon />
            </div>
          </div>
          <div 
            className="footer_platform_content" 
            style={{ display: openSections.platform ? 'block' : 'none' }}
          >
            <a href="/" className="link-block-102 w-inline-block">
              <div className="text-block-28">Overview</div>
            </a>
            <a href="/supplier-discovery" className="link-block-102 w-inline-block">
              <div className="text-block-28">Supplier Discovery</div>
            </a>
            <a href="/product-ideation" className="link-block-102 w-inline-block">
              <div className="text-block-28">Product Ideation</div>
            </a>
            <a href="/supplier-outreach" className="link-block-102 w-inline-block">
              <div className="text-block-28">Supplier Outreach</div>
            </a>
            <a href="/quote-intelligence" className="link-block-102 w-inline-block">
              <div className="text-block-28">Quote Intelligence</div>
            </a>
            <a href="/pricing" className="link-block-102 w-inline-block">
              <div className="text-block-28">Pricing</div>
            </a>
          </div>
          <div className="divider"></div>
          <div 
            className="footer_solutions_cell"
            onClick={() => toggleSection('solutions')}
          >
            <div className="text-block-27-copy">Solutions</div>
            <div className={`code-embed-919 w-embed ${openSections.solutions ? 'open' : ''}`}>
              <ChevronIcon />
            </div>
          </div>
          <div 
            className="footer_soulutions_content"
            style={{ display: openSections.solutions ? 'flex' : 'none' }}
          >
            <a href="/category/apparel-footwear-suppliers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Apparel &amp; Footwear</div>
            </a>
            <a href="/category/jewelry-suppliers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Jewelry</div>
            </a>
            <a href="/category/consumer-electronics-suppliers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Consumer Electronics</div>
            </a>
            <a href="/category/beauty-and-personal-care" className="link-block-102 w-inline-block">
              <div className="text-block-28">Beauty &amp; Personal Care</div>
            </a>
            <a href="/category/food-and-beverage" className="link-block-102 w-inline-block">
              <div className="text-block-28">Food &amp; Beverages</div>
            </a>
            <a href="/category/all-categories" className="link-block-102 w-inline-block">
              <div className="text-block-28">All Categories</div>
            </a>
            <div className="divider"></div>
            <a href="/country/mexico" className="link-block-102 w-inline-block">
              <div className="text-block-28">Mexico</div>
            </a>
            <a href="/country/china" className="link-block-102 w-inline-block">
              <div className="text-block-28">China</div>
            </a>
            <a href="/country/vietnam" className="link-block-102 w-inline-block">
              <div className="text-block-28">Vietnam</div>
            </a>
            <a href="/country/india" className="link-block-102 w-inline-block">
              <div className="text-block-28">India</div>
            </a>
            <a href="/country/turkey" className="link-block-102 w-inline-block">
              <div className="text-block-28">Turkey</div>
            </a>
            <a href="/country/usa" className="link-block-102 w-inline-block">
              <div className="text-block-28">USA</div>
            </a>
            <a href="/country/italy" className="link-block-102 w-inline-block">
              <div className="text-block-28">Italy</div>
            </a>
            <a href="/country/indonesia" className="link-block-102 w-inline-block">
              <div className="text-block-28">Indonesia</div>
            </a>
            <a href="/country/germany" className="link-block-102 w-inline-block">
              <div className="text-block-28">Germany</div>
            </a>
            <a href="/country/philippines" className="link-block-102 w-inline-block">
              <div className="text-block-28">Philippines</div>
            </a>
            <div className="divider"></div>
            <a href="/company/importers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Importer</div>
            </a>
            <a href="/company/brand" className="link-block-102 w-inline-block">
              <div className="text-block-28">Consumer Brand</div>
            </a>
          </div>
          <div className="divider"></div>
          <div 
            className="footer_resources_cell"
            onClick={() => toggleSection('resources')}
          >
            <div className="text-block-27-copy">Resources</div>
            <div className={`code-embed-919 w-embed ${openSections.resources ? 'open' : ''}`}>
              <ChevronIcon />
            </div>
          </div>
          <div 
            className="footer_resources_content"
            style={{ display: openSections.resources ? 'flex' : 'none' }}
          >
            <a href="/blog" className="link-block-102 w-inline-block">
              <div className="text-block-28">Blog<br/></div>
            </a>
            <a href="/about-us" className="link-block-102 w-inline-block">
              <div className="text-block-28">About Us</div>
            </a>
            <a href="/career" className="link-block-102 w-inline-block">
              <div className="text-block-28">Career</div>
            </a>
            <a href="https://help.sourceready.com/en" target="_blank" rel="noopener noreferrer" className="link-block-102 w-inline-block">
              <div className="text-block-28">Help Center<br/></div>
            </a>
            <a href="https://airtable.com/appYe8ucpUyLBWajT/pagcX2GvDezFe6Xev/form?prefill_ID=" target="_blank" rel="noopener noreferrer" className="link-block-102 w-inline-block">
              <div className="text-block-28">Join as a Supplier</div>
            </a>
          </div>
          <div className="divider"></div>
          <div 
            className="footer_contact_cell"
            onClick={() => toggleSection('contact')}
          >
            <div className="text-block-27-copy">Contact us</div>
            <div className={`code-embed-919 w-embed ${openSections.contact ? 'open' : ''}`}>
              <ChevronIcon />
            </div>
          </div>
          <div 
            className="footer_contect_content"
            style={{ display: openSections.contact ? 'flex' : 'none' }}
          >
            <a href="tel:+1(855)-691-2549" className="link-block-102 w-inline-block">
              <div className="text-block-28">+1(855)-691-2549</div>
            </a>
            <a href="mailto:support@sourceready.com" className="link-block-102 w-inline-block">
              <div className="text-block-28">support@sourceready.com</div>
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="div-block-33">
          <div className="text-block-11">Copyright ©&nbsp;2025&nbsp;SourceReady</div>
          <a href="/privacy-policy" className="link-block-7 w-inline-block">
            <div className="text-block-12">Privacy Policy</div>
          </a>
          <a href="/terms-of-service" className="link-block-7 w-inline-block">
            <div className="text-block-12">Terms of Service</div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

