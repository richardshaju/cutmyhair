"use client";

import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "../ui/use-toast";
import { Textarea } from "../ui/textarea";

function Dashboard() {
  const data = JSON.parse(localStorage.getItem('response') || '{}');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 
    e.preventDefault();
    const body = {
      services: formData,
      _id: data.existingUser._id
    };

      fetch(`https://cutmyhair.onrender.com/saloon/addService`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
      .then(async (data) => {
        const res = await data.json();          
        if (res.ok) {
          toast({ title: "Service Added", variant: "default" });
          return;
        } else {
          toast({ title: "Server Error", variant: "destructive" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8000/saloon/getReservation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => {
        const res = await data.json();           
       console.log(res.result);
       
      })
      .catch((error) => {
        console.error(error);
      });

  })



  function handleFileChangeChange(e: any) {
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: reader.result,
      }));
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  return (
    <div>
      <div>
        <h1>SALOON DASH</h1>
      </div>
      <div className="flex justify-around items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Service</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Service</DialogTitle>
              <DialogDescription>Add the details carefully</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-4">
                  <Label htmlFor="title" className="text-left">
                    Service Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Bank Heist"
                    className="col-span-3"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Label htmlFor="desc" className="text-left">
                    Description
                  </Label>
                  <Textarea
                    id="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    placeholder="blah blah blah"
                    className="col-span-3"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Label htmlFor="price" className="text-left">
                    Price
                  </Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="value"
                    className="col-span-3"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="">
                    <Label htmlFor="image" className="text-left">
                      Image
                    </Label>
                    <Input
                      id="image"
                      name="image"
                      type="file"
                      onChange={handleFileChangeChange}
                      placeholder="867"
                      className="col-span-6"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Dashboard;
