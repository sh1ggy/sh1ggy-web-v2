"use client"

import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { JOBS } from "@/constants/info";

const BIO: string =
  "I am currently working at Sonic IT as a Fullstack Software Engineer based in Brisbane, having completed my Bachelor in Computer Science at QUT at the start of 2022 and currently having working rights as an Australian citizen. I have accumulated 3 years of industry experience working in IT, starting in support and now settling in development";

export default function Experience() {
  return (
    <AnimatePresence mode="wait">
      <div className="relative w-full max-w-5xl mx-auto px-12 py-8 bg-gradient-to-br from-purple-900 to-indigo-900 bg-indigo-900">
        <Carousel
          opts={{
            align: "center",
          }}
        >
          <CarouselContent>
            {JOBS.map((job, i) => (
              <motion.div
                key={job.date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.5 }}
                className="group perspective"
              >
                <CarouselItem className="lg:basis-1/3">
                  <div className="group perspective">
                    <Card className="h-[420px] lg:w-auto w-[275px] [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]">
                      <CardContent
                        style={{ backgroundColor: job.bgColour }}
                        className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(0deg)] p-2 rounded-xl flex items-center justify-center"
                      >
                        <p className="flex flex-col justify-center items-center text-xl font-bold text-center text-blue-800">
                          <img src={job.imagePath} />
                        </p>
                      </CardContent>
                      <CardContent className="flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] p-6">
                        <CardHeader>
                          <CardTitle
                            style={{ color: job.colour }}
                            className="text-2xl font-bold text-blue-600 mb-2"
                          >
                            {job.company}
                          </CardTitle>
                          <p className="text-lg font-semibold text-blue-800">
                            {job.roleName}
                          </p>
                          <p className="text-sm text-gray-600 mb-4">
                            {job.date}
                          </p>
                          <p className="text-sm">{job.bio}</p>
                        </CardHeader>
                        <CardFooter className="mt-24">
                          <div className="flex flex-wrap gap-1 items-center justify-center">
                            {job.tags.map((skill, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="px-2 py-1 text-xs rounded"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardFooter>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </AnimatePresence>
  );
}
