import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdAddCircle } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineQuiz } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconLogout,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarMinimalColored.module.css';

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

NavbarLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

const mockdata = [
  { icon: IoMdHome, label: 'Home' },
  { icon:  GiBookshelf, label: 'My Courses' },
  { icon: MdFormatListBulletedAdd, label: 'Add Course' },
  { icon: MdOutlineQuiz, label: 'Quiz' },
  { icon: IoMdAddCircle, label: 'Add Quiz' },
  { icon: CgProfile, label: 'Profile Setting' },
  { icon: FiLogOut, label: 'Logout' },
];

export default function NavbarMinimalColored() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <MantineLogo type="mark" inverted size={30} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={1}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
