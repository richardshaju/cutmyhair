"use client";

import React, { useState } from "react";

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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    image: "",
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
    console.log(formData);
    
    e.preventDefault();
    fetch(`https://cutmyhair.onrender.com/saloon/addService`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 403) {
          toast({ title: "Server Error", variant: "destructive" });
          return;
        } else {
          toast({ title: "Service Added", variant: "default" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result as string,
      });
    };

    if (file) {
        reader.readAsDataURL(file);
      }
 
  };
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
                      value={formData.image}
                      type="file"
                      onChange={handleAvatarChange}
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
