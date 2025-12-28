import './SolutionsDropdown.css'

function SolutionsDropdown({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="solutions-list" onMouseLeave={onClose}>
      <div className="solutions-list-content">
        <div className="solutions-category">
          <div className="solutions-category-title">By Category</div>
          <div className="solutions-items-grid">
            <a href="/category/apparel-footwear-suppliers" className="solutions-item">
              <div className="solutions-item-icon">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.2618 13.7978C12.8762 11.3194 11.8928 8.974 11.2772 8.05947C10.9323 7.54715 10.7902 6.89127 10.9512 6.2472L11.5662 3.78701L10.092 3.2956L8.9838 3.8497C8.36444 4.15938 7.63543 4.15938 7.01607 3.8497L5.90786 3.2956L4.43362 3.78701L5.05681 6.27979C5.20663 6.87904 5.09678 7.49684 4.78579 8.00098C4.19058 8.96586 3.17869 11.4888 2.74866 13.7966L13.2618 13.7978ZM3.87844 2.70716C3.38272 2.8724 3.0978 3.39144 3.22453 3.89838L3.89264 6.57084C3.96098 6.84417 3.9124 7.13117 3.76448 7.37096C3.13652 8.38893 1.8716 11.325 1.49997 14C1.42397 14.547 1.87487 14.9966 2.42715 14.9966L13.559 14.9978C14.1113 14.9978 14.5633 14.5486 14.5 14C14.1651 11.0977 12.9364 8.3755 12.2727 7.3894C12.1045 7.13959 12.0423 6.83038 12.1154 6.53824L12.7753 3.89838C12.9021 3.39145 12.6171 2.8724 12.1214 2.70716L10.3929 2.13098C10.1413 2.04711 9.86667 2.06663 9.62945 2.18524L8.44715 2.77639C8.16562 2.91715 7.83425 2.91715 7.55272 2.77639L6.37042 2.18524C6.1332 2.06663 5.85858 2.04711 5.60698 2.13098L3.87844 2.70716Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.00002 0.400002C6.3314 0.400002 6.60002 0.668631 6.60002 1V2.5C6.60002 2.83137 6.3314 3.1 6.00002 3.1C5.66865 3.1 5.40002 2.83137 5.40002 2.5V1C5.40002 0.668631 5.66865 0.400002 6.00002 0.400002ZM10 0.400002C10.3314 0.400002 10.6 0.668631 10.6 1V2.5C10.6 2.83137 10.3314 3.1 10 3.1C9.66865 3.1 9.40002 2.83137 9.40002 2.5V1C9.40002 0.668631 9.66865 0.400002 10 0.400002Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.5 7.6H4V6.4H11.5V7.6Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="solutions-item-text">Apparel & Footwear</div>
            </a>
            <a href="/category/jewelry-suppliers" className="solutions-item">
              <div className="solutions-item-icon">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.8 11.6L8 11L7.2 11.6V12.9L8 13.5L8.8 12.9V11.6ZM10 11.3V13.2C10 13.3889 9.91108 13.5667 9.76 13.68L8.36 14.73C8.14667 14.89 7.85333 14.89 7.64 14.73L6.24 13.68C6.08892 13.5667 6 13.3889 6 13.2V11.3C6 11.1111 6.08892 10.9333 6.24 10.82L7.64 9.77C7.85333 9.61 8.14667 9.61 8.36 9.77L9.76 10.82C9.91108 10.9333 10 11.1111 10 11.3Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.39999 1C2.73136 1 2.99999 1.26863 2.99999 1.6V3.4C2.99999 6.16142 5.23856 8.4 7.99999 8.4C10.7614 8.4 13 6.16142 13 3.4V1.6C13 1.26863 13.2686 1 13.6 1C13.9314 1 14.2 1.26863 14.2 1.6V3.4C14.2 6.82416 11.4242 9.6 7.99999 9.6C4.57582 9.6 1.79999 6.82416 1.79999 3.4V1.6C1.79999 1.26863 2.06862 1 2.39999 1Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="solutions-item-text">Jewelry</div>
            </a>
            <a href="/category/consumer-electronics-suppliers" className="solutions-item">
              <div className="solutions-item-icon">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.99846 4.16564C5.7759 4.49948 5.40122 4.7 5 4.7H3.4C2.73726 4.7 2.2 5.23726 2.2 5.9V11.6C2.2 12.2627 2.73726 12.8 3.4 12.8H12.6C13.2627 12.8 13.8 12.2627 13.8 11.6V5.9C13.8 5.23726 13.2627 4.7 12.6 4.7H11C10.5988 4.7 10.2241 4.49948 10.0015 4.16564L9.35778 3.2H6.64222L5.99846 4.16564ZM11 3.5L10.2969 2.4453C10.1114 2.1671 9.79917 2 9.46482 2H6.53518C6.20083 2 5.8886 2.1671 5.70313 2.4453L5 3.5H3.4C2.07452 3.5 1 4.57452 1 5.9V11.6C1 12.9255 2.07452 14 3.4 14H12.6C13.9255 14 15 12.9255 15 11.6V5.9C15 4.57452 13.9255 3.5 12.6 3.5H11Z" fill="currentColor"></path>
                  <circle cx="12" cy="6.2" r="0.6" fill="currentColor"></circle>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 10.4C8.99411 10.4 9.8 9.59411 9.8 8.6C9.8 7.60589 8.99411 6.8 8 6.8C7.00589 6.8 6.2 7.60589 6.2 8.6C6.2 9.59411 7.00589 10.4 8 10.4ZM8 11.6C9.65685 11.6 11 10.2569 11 8.6C11 6.94314 9.65685 5.6 8 5.6C6.34315 5.6 5 6.94314 5 8.6C5 10.2569 6.34315 11.6 8 11.6Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="solutions-item-text">Consumer Electronics</div>
            </a>
            <a href="/category/beauty-and-personal-care" className="solutions-item">
              <div className="solutions-item-icon">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_792_91)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.7564 0.451712C13.0592 0.317129 13.4138 0.453505 13.5483 0.756316L14.4548 2.7958C15.2197 4.51691 15.2566 6.4741 14.5571 8.22283C13.9779 9.67091 14.0085 11.2916 14.6419 12.7168L15.5483 14.7563C15.6829 15.0591 15.5465 15.4137 15.2437 15.5483C14.9409 15.6829 14.5863 15.5465 14.4518 15.2437L13.5453 13.2042C12.7804 11.4831 12.7435 9.52589 13.443 7.77716C14.0222 6.32908 13.9916 4.70838 13.3582 3.28317L12.4518 1.24368C12.3172 0.940871 12.4536 0.586294 12.7564 0.451712Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.75637 0.451712C9.05918 0.317129 9.41376 0.453505 9.54834 0.756316L10.4548 2.7958C11.2197 4.51691 11.2566 6.4741 10.5571 8.22283C9.97791 9.67091 10.0085 11.2916 10.6419 12.7168L11.5483 14.7563C11.6829 15.0591 11.5465 15.4137 11.2437 15.5483C10.9409 15.6829 10.5863 15.5465 10.4518 15.2437L9.54533 13.2042C8.78039 11.4831 8.74347 9.52589 9.44297 7.77716C10.0222 6.32908 9.99163 4.70838 9.3582 3.28317L8.45177 1.24368C8.31718 0.940871 8.45356 0.586294 8.75637 0.451712Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.75637 0.451712C5.05918 0.317129 5.41376 0.453505 5.54834 0.756316L6.45478 2.7958C7.21971 4.51691 7.25663 6.4741 6.55714 8.22283C5.97791 9.67091 6.00847 11.2916 6.6419 12.7168L7.54834 14.7563C7.68292 15.0591 7.54655 15.4137 7.24374 15.5483C6.94092 15.6829 6.58635 15.5465 6.45177 15.2437L5.54533 13.2042C4.78039 11.4831 4.74347 9.52589 5.44297 7.77716C6.0222 6.32908 5.99163 4.70838 5.3582 3.28317L4.45177 1.24368C4.31718 0.940871 4.45356 0.586294 4.75637 0.451712Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.58837 0.882333C5.65336 1.20727 5.44263 1.52336 5.11769 1.58835C4.11794 1.7883 3.23918 2.60924 2.59402 3.84091C2.04449 4.89002 1.70527 6.16661 1.62082 7.4H3.50002C3.8314 7.4 4.10002 7.66863 4.10002 8V10.4H5.50002C5.8314 10.4 6.10002 10.6686 6.10002 11C6.10002 11.3314 5.8314 11.6 5.50002 11.6H3.50002C3.16865 11.6 2.90002 11.3314 2.90002 11V8.6H1.00002C0.668654 8.6 0.400024 8.33137 0.400024 8C0.400024 6.4101 0.795357 4.68856 1.53103 3.2841C2.26087 1.89076 3.38211 0.711704 4.88235 0.411654C5.20729 0.346667 5.52339 0.557397 5.58837 0.882333Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.77567 4.84188C2.863 4.57991 3.14616 4.43833 3.40813 4.52566L3.52567 4.56484C3.83357 4.66747 4.16646 4.66747 4.47436 4.56484L4.5919 4.52566C4.85387 4.43833 5.13703 4.57991 5.22436 4.84188C5.31168 5.10386 5.1701 5.38702 4.90813 5.47434L4.79058 5.51352C4.27742 5.68458 3.72261 5.68458 3.20944 5.51352L3.0919 5.47434C2.82993 5.38702 2.68835 5.10386 2.77567 4.84188Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_792_91">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="solutions-item-text">Beauty & Personal Care</div>
            </a>
            <a href="/category/food-and-beverage" className="solutions-item">
              <div className="solutions-item-icon">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.4 2.2C3.4 1.53726 3.93726 1 4.6 1H11.4C12.0627 1 12.6 1.53726 12.6 2.2V3.5563C12.6 3.76087 12.6448 3.96296 12.7313 4.14834L13.7561 6.3442C13.9167 6.68847 14 7.06378 14 7.4437V13.8C14 14.4627 13.4627 15 12.8 15H3.2C2.53726 15 2 14.4627 2 13.8V7.4437C2 7.06378 2.08326 6.68847 2.24392 6.3442L3.26866 4.14834C3.35517 3.96296 3.4 3.76087 3.4 3.5563V2.2ZM11.4 2.2L4.6 2.2V3.5563C4.6 3.93622 4.51674 4.31153 4.35608 4.6558L3.33134 6.85166C3.24483 7.03704 3.2 7.23913 3.2 7.4437V13.8H12.8V7.4437C12.8 7.23913 12.7552 7.03704 12.6687 6.85166L11.6439 4.6558C11.4833 4.31153 11.4 3.93622 11.4 3.5563L11.4 2.2Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.6 3V3.52786C12.6 3.9315 12.506 4.3296 12.3255 4.69062L11.2478 6.84604C11.1506 7.04043 11.1 7.25479 11.1 7.47214V14H9.90002V7.47214C9.90002 7.0685 9.994 6.6704 10.1745 6.30938L11.2522 4.15396C11.3494 3.95957 11.4 3.74521 11.4 3.52786V3H12.6Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 4.6V3.4H12V4.6H4ZM10.5 7.6H2.5V6.4H10.5V7.6Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="solutions-item-text">Food & Beverage</div>
            </a>
            <a href="/category/all-categories" className="solutions-item">
              <div className="solutions-item-text">All Categories</div>
            </a>
          </div>
        </div>
        <div className="solutions-category">
          <div className="solutions-category-title">By Country</div>
          <div className="solutions-items-grid">
            <a href="/country/mexico" className="solutions-item">
              <div className="solutions-item-icon flag">🇲🇽</div>
              <div className="solutions-item-text">Mexico</div>
            </a>
            <a href="/country/china" className="solutions-item">
              <div className="solutions-item-icon flag">🇨🇳</div>
              <div className="solutions-item-text">China</div>
            </a>
            <a href="/country/vietnam" className="solutions-item">
              <div className="solutions-item-icon flag">🇻🇳</div>
              <div className="solutions-item-text">Vietnam</div>
            </a>
            <a href="/country/india" className="solutions-item">
              <div className="solutions-item-icon flag">🇮🇳</div>
              <div className="solutions-item-text">India</div>
            </a>
            <a href="/country/turkey" className="solutions-item">
              <div className="solutions-item-icon flag">🇹🇷</div>
              <div className="solutions-item-text">Turkey</div>
            </a>
            <a href="/country/usa" className="solutions-item">
              <div className="solutions-item-icon flag">🇺🇸</div>
              <div className="solutions-item-text">USA</div>
            </a>
            <a href="/country/italy" className="solutions-item">
              <div className="solutions-item-icon flag">🇮🇹</div>
              <div className="solutions-item-text">Italy</div>
            </a>
            <a href="/country/indonesia" className="solutions-item">
              <div className="solutions-item-icon flag">🇮🇩</div>
              <div className="solutions-item-text">Indonesia</div>
            </a>
            <a href="/country/germany" className="solutions-item">
              <div className="solutions-item-icon flag">🇩🇪</div>
              <div className="solutions-item-text">Germany</div>
            </a>
            <a href="/country/philippines" className="solutions-item">
              <div className="solutions-item-icon flag">🇵🇭</div>
              <div className="solutions-item-text">Philippines</div>
            </a>
          </div>
        </div>
        <div className="solutions-category">
          <div className="solutions-category-title">By Company</div>
          <div className="solutions-items-grid">
            <a href="/company/brand" className="solutions-item">
              <div className="solutions-item-icon">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.54711 1.71736C7.11897 0.47756 8.88103 0.477563 9.45289 1.71736L10.7085 4.43961C10.7668 4.56593 10.8865 4.65291 11.0247 4.66929L14.0017 5.02227C15.3575 5.18302 15.902 6.85884 14.8996 7.78583L12.6986 9.82125C12.5965 9.9157 12.5508 10.0564 12.5779 10.1929L13.1622 13.1333C13.4282 14.4724 12.0027 15.5081 10.8113 14.8413L8.19538 13.377C8.07399 13.309 7.92601 13.309 7.80463 13.377L5.18868 14.8413C3.9973 15.5081 2.57176 14.4724 2.83785 13.1333L3.42211 10.1929C3.44922 10.0564 3.40349 9.9157 3.30136 9.82125L1.10036 7.78583C0.0979556 6.85884 0.642465 5.18302 1.99829 5.02227L4.97533 4.66929C5.11348 4.65291 5.23319 4.56593 5.29146 4.43961L6.54711 1.71736ZM8.36322 2.21997C8.22026 1.91002 7.77974 1.91002 7.63678 2.21997L6.38112 4.94223C6.14806 5.44752 5.6692 5.79543 5.11662 5.86094L2.13958 6.21392C1.80062 6.25411 1.6645 6.67306 1.9151 6.90481L4.1161 8.94023C4.52464 9.31803 4.70754 9.88096 4.5991 10.4267L4.01484 13.3672C3.94832 13.7019 4.3047 13.9609 4.60255 13.7941L7.21849 12.3299C7.70405 12.0581 8.29595 12.0581 8.78151 12.3299L11.3975 13.7941C11.6953 13.9609 12.0517 13.7019 11.9852 13.3672L11.4009 10.4267C11.2925 9.88097 11.4754 9.31804 11.8839 8.94023L14.0849 6.90481C14.3355 6.67306 14.1994 6.25411 13.8604 6.21392L10.8834 5.86094C10.3308 5.79543 9.85195 5.44752 9.61888 4.94223L8.36322 2.21997Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="solutions-item-text">Consumer Brand</div>
            </a>
            <a href="/company/importers" className="solutions-item">
              <div className="solutions-item-icon">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.4 8C1.4 7.66863 1.66863 7.4 2 7.4L7.90001 7.4C8.23138 7.4 8.50001 7.66863 8.50001 8C8.50001 8.33137 8.23138 8.6 7.90001 8.6L2 8.6C1.66863 8.6 1.4 8.33138 1.4 8Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.39048 1.29445C8.64207 1.5101 8.67121 1.88888 8.45556 2.14048C7.49059 3.26628 6.1 5.21261 6.1 8C6.1 9.08496 6.442 10.2689 6.92261 11.3423C7.40224 12.4135 7.9978 13.3255 8.45556 13.8595C8.67121 14.1111 8.64207 14.4899 8.39048 14.7056C8.13888 14.9212 7.7601 14.8921 7.54445 14.6405C7.0022 14.0079 6.34776 12.9949 5.82739 11.8327C5.308 10.6727 4.9 9.31505 4.9 8C4.9 4.7874 6.50942 2.56707 7.54445 1.35953C7.7601 1.10793 8.13888 1.0788 8.39048 1.29445Z" fill="currentColor"></path>
                  <path d="M8 14.4C8 14.0686 7.73059 13.8033 7.40095 13.7694C4.47916 13.4696 2.2 11.001 2.2 8C2.2 4.79675 4.79675 2.2 8 2.2C10.8622 2.2 13.2402 4.2733 13.7141 7C13.8597 7.83774 15.0592 7.71208 14.8924 6.77078C14.3114 3.49094 11.4466 1 8 1C4.13401 1 1 4.13401 1 8C1 11.664 3.81501 14.6704 7.40026 14.9747C7.73044 15.0027 8 14.7314 8 14.4V14.4Z" fill="currentColor"></path>
                  <path d="M7.54445 2.14048C7.3288 1.88888 7.35793 1.5101 7.60953 1.29445C7.86113 1.0788 8.23991 1.10793 8.45556 1.35953C9.32329 2.37189 10.5947 4.09609 10.9831 6.52005C11.0353 6.84625 10.7927 7.13927 10.4639 7.1717V7.1717C10.1331 7.20432 9.84112 6.96086 9.7853 6.63317C9.43315 4.56586 8.34305 3.07218 7.54445 2.14048Z" fill="currentColor"></path>
                  <path d="M9 11.75L11.5 9V10.5C11.5 10.5 14 10.5 15 9C15 13 11.5 13 11.5 13V14.5L9 11.75Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="solutions-item-text">Importer</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionsDropdown

