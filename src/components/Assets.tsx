import AcService from '@/Icons/AcService';
import AirConditioning from '@/Icons/AirConditioning';
import AppleStore from '@/Icons/AppleStore';
import AppleStoreLogo from '@/Icons/AppleStoreLogo';
import Batteries from '@/Icons/Batteries';
import Bearings from '@/Icons/Bearings';
import BeltsRoller from '@/Icons/BeltsRoller';
import BodyParts from '@/Icons/BodyParts';
import BrakeSystem from '@/Icons/BrakeSystem';
import CalendarColor from '@/Icons/CalendarColor';
import Car from '@/Icons/Car';
import CarAccesories from '@/Icons/CarAccesories';
import CarBig from '@/Icons/CarBig';
import CarButton from '@/Icons/CarButton';
import CarSpa from '@/Icons/CarSpa';
import ClutchSystem from '@/Icons/ClutchSystem';
import ControlCables from '@/Icons/ControlCables';
import DentingPainting from '@/Icons/DentingPainting';
import Detailing from '@/Icons/Detailing';
import Download from '@/Icons/Download';
import ElectricComponents from '@/Icons/ElectricComponents';
import Engine from '@/Icons/Engine';
import ExhaustSystem from '@/Icons/ExhaustSystem';
import Facebook from '@/Icons/Facebook';
import GooglePlay from '@/Icons/GooglePlay';
import GooglePlayLogo from '@/Icons/GooglePlayLogo';
import HamBurger from '@/Icons/HamBurger';
import Instagram from '@/Icons/Instagram';
import Language from '@/Icons/Language';
import LinkedIn from '@/Icons/LinkedIn';
import LoadingColor from '@/Icons/LoadingColor';
import Location from '@/Icons/Location';
import MaroofLogo from '@/Icons/MaroofLogo';
import MaroofLogoBig from '@/Icons/MaroofLogoBig';
import NotePad from '@/Icons/NotePad';
import NotepadCheck from '@/Icons/NotepadCheck';
import NotepadColor from '@/Icons/NotepadColor';
import Percentage from '@/Icons/Percentage';
import PeriodicServices from '@/Icons/PeriodicServices';
import Quotes from '@/Icons/Quotes';
import Robot from '@/Icons/Robot';
import Search from '@/Icons/Search';
import ServiceParts from '@/Icons/ServiceParts';
import SquareChecked from '@/Icons/SquareChecked';
import SquareCheckedBig from '@/Icons/SquareCheckedBig';
import Suspension from '@/Icons/Suspension';
import TimeWatch from '@/Icons/TimeWatch';
import TruckChecked from '@/Icons/TruckChecked';
import Twitter from '@/Icons/Twitter';
import Tyres from '@/Icons/Tyres';
import UserChecked from '@/Icons/UserChecked';
import React from 'react';

const icons = {
Language,
Location,
HamBurger,
Search,
Percentage,
NotepadCheck,
UserChecked,
TruckChecked,
Car,
SquareChecked,
MaroofLogo,
SquareCheckedBig,
CarBig,
Download,
NotePad,
TimeWatch,
ServiceParts,
AirConditioning,
BeltsRoller,
Bearings,
Engine,
BodyParts,
ControlCables,
BrakeSystem,
CarAccesories,
ClutchSystem,
ElectricComponents,
ExhaustSystem,
PeriodicServices,
AcService,
Tyres,
Batteries,
DentingPainting,
CarSpa,
Detailing,
Suspension,
MaroofLogoBig,
NotepadColor,
CalendarColor,
LoadingColor,
GooglePlay,
GooglePlayLogo,
AppleStore,
AppleStoreLogo,
Facebook,
Instagram,
Twitter,
LinkedIn,
CarButton,
Quotes,
Robot
};


export type IconName = keyof typeof icons;


const Icon = ({ name }: { name: IconName }) => {
  const SvgIcon = icons[name];
  return SvgIcon ? <SvgIcon /> : null;
};

export default Icon;
