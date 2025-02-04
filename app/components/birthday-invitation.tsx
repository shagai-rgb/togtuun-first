"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Cake, MapPin, Calendar, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { CopyButton } from "./copy-button";

interface BirthdayInvitationProps {
  name: string;
  date: string;
  time: string;
  location: string;
  phoneNumber: string;
  age?: number;
  images: string[];
}

export default function BirthdayInvitation({
  name,
  date,
  time,
  location,
  phoneNumber,
  age,
}: BirthdayInvitationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-pink-100 to-purple-100 shadow-lg overflow-hidden">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold text-purple-700">
            {age ? `${name}'s first Birthday!` : `${name}'s Birthday Party!`}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-lg font-semibold text-gray-800">
              We are inviting your family
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <Calendar className="h-5 w-5 text-pink-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock className="h-5 w-5 text-pink-500" />
              <span>{time}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="h-5 w-5 text-pink-500" />
              <span>{location}</span>
              <a href="https://www.google.com/maps/place/%D0%A3%D0%94%D0%A5%D0%A290,+BZD+-+36+khoroo,+Ulaanbaatar+13311/@47.9068138,106.9416119,48m/data=!3m1!1e3!4m6!3m5!1s0x5d969229673f3e93:0xc6cc1f3d681286b5!8m2!3d47.9067579!4d106.9417641!16s%2Fg%2F11t2cmz719?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D">
                link
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-5 w-5 text-pink-500" />
              <span>{phoneNumber}</span>
              <CopyButton text={phoneNumber} label="phone number" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center"
          >
            <Cake className="h-12 w-12 mx-auto text-purple-500" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
