import React from 'react';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { BiMusic } from 'react-icons/bi';
import { RiBookOpenLine } from 'react-icons/ri';
import Image from "next/image";
import Link from "next/link";

// INTERNAL IMPORT
import Style from './SideBar.module.css';
import images from '../../img';

const SideBar = () => {
  return (
    <div className={Style.SideBar_parent}>
        <div className={Style.SideBar}>
            <div className={Style.SideBar_logo}>
                <Image
                    src={images.logo}
                    alt='logo'
                    className={Style.SideBar_logo_img}
                />
            </div>

            <hr className={Style.SideBar_line} />

            <div className={Style.SideBar_item}>
                <AiFillHome className={Style.SideBar_item_icon} />
                <span>Home</span>
            </div>
            <div className={Style.SideBar_item}>
                <BiMusic className={Style.SideBar_item_icon} />
                <span>Music</span>
            </div>
            <div className={Style.SideBar_item}>
                <RiBookOpenLine className={Style.SideBar_item_icon} />
                <span>Sightreading</span>
            </div>
            <div className={Style.SideBar_item}>
                <AiFillSetting className={Style.SideBar_item_icon} />
                <span>Profile</span>
            </div>

            <div className={Style.SideBar_profile}>
                <Image
                    src={images.profile}
                    alt="Profile"
                    className={Style.SideBar_profile_img}
                />
                <div className={Style.SideBar_profile_info}>
                    <div className={Style.SideBar_profile_info_name}>Kevin Lee</div>
                    <div className={Style.SideBar_profile_info_email}>kevin.lee@example.com</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SideBar;