import AirConditioning from '@/Icons/AirConditioning';
import Bearings from '@/Icons/Bearings';
import BeltsRoller from '@/Icons/BeltsRoller';
import BodyParts from '@/Icons/BodyParts';
import BrakeSystem from '@/Icons/BrakeSystem';
import Car from '@/Icons/Car';
import CarAccesories from '@/Icons/CarAccesories';
import CarBig from '@/Icons/CarBig';
import ClutchSystem from '@/Icons/ClutchSystem';
import ControlCables from '@/Icons/ControlCables';
import Download from '@/Icons/Download';
import ElectricComponents from '@/Icons/ElectricComponents';
import Engine from '@/Icons/Engine';
import ExhaustSystem from '@/Icons/ExhaustSystem';
import HamBurger from '@/Icons/HamBurger';
import Language from '@/Icons/Language';
import Location from '@/Icons/Location';
import MaroofLogo from '@/Icons/MaroofLogo';
import NotePad from '@/Icons/NotePad';
import NotepadCheck from '@/Icons/NotepadCheck';
import Percentage from '@/Icons/Percentage';
import Search from '@/Icons/Search';
import ServiceParts from '@/Icons/ServiceParts';
import SquareChecked from '@/Icons/SquareChecked';
import SquareCheckedBig from '@/Icons/SquareCheckedBig';
import TimeWatch from '@/Icons/TimeWatch';
import TruckChecked from '@/Icons/TruckChecked';
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
ExhaustSystem
};


export type IconName = keyof typeof icons;


const Icon = ({ name }: { name: IconName }) => {
  const SvgIcon = icons[name];
  return SvgIcon ? <SvgIcon /> : null;
};

export default Icon;
