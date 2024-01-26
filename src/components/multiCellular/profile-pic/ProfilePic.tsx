import { useQuery } from '@apollo/client';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, ReactElement } from 'react';
import defaultProfilePic from '../../../assets/image/demo-profile.png';
import LoaderComponent from '../LoaderComponent';

interface ProfilePicProps {
  name?: string;
  selectedImage?: string;
  profilePicPath?: string;
  onChangeProfilePicture?: (e: ChangeEvent<HTMLInputElement>) => void;
  editable?: boolean;
}

const ProfilePic = ({
  selectedImage,
  profilePicPath,
  onChangeProfilePicture,
  editable,
  name,
}: ProfilePicProps): ReactElement => {
  let profilePicSelectorRef: HTMLInputElement | null = null;

 

  return (
    <div className="avatar w-24 h-24">
      <div className="relative inline-block">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={(ref) => {
            profilePicSelectorRef = ref;
          }}
          onChange={(e) => (onChangeProfilePicture ? onChangeProfilePicture(e) : null)}
          disabled={!editable}
        />

        {true ? (
          <LoaderComponent />
        ) : (
          <img
            src={selectedImage || defaultProfilePic}
            alt={name}
            className="h-full w-full rounded-full object-cover"
          />
        )}

        {editable ? (
          <div className="absolute top-0 h-full w-full bg-black rounded-full bg-opacity-25 flex items-center justify-center">
            <button
              type="button"
              onClick={() => profilePicSelectorRef?.click()}
              className="outline-none bg-opacity-25 rounded-full border-none p-2 hover:outline-none focus:outline-none text-white transition duration-200"
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faImage} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfilePic;
