import { ImagePath } from '@/Constant';
import Image from 'next/image';

const HeaderProfile = () => {
  return (
    <div className="d-flex">
      <div className="media-size-email">
        <Image width={52} height={52} className= 'me-3 rounded-circle' src={`${ImagePath}/user/user.png`} alt= "Image"  />
      </div>
      <div className="flex-grow-1">
        <h4 className='f-w-700'>MARK JENCO</h4>
        <p className='text-truncate'>Markjecno@gmail.com</p>
      </div>
    </div>
  );
};

export default HeaderProfile; 