'use client';
import { Box, styled } from '@mui/material'
import React from 'react'
import HeroBanner from './heroBanner';
import TimeSlots from '@/app/salon/slots/TimeSlots';

 const HeadTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  fontSize: "46px",
  fontWeight:"600",
  fontFamily:"Publice Sans, sans-serif",
}));

function UserHome() {
  return (
    <>
    <HeroBanner />
    </>
  )
}

export default UserHome