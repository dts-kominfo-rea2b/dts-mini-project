import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";

import Number1 from "../../../../assets/rankNumber/Rank - 01.svg";
import Number2 from "../../../../assets/rankNumber/Rank - 02.svg";
import Number3 from "../../../../assets/rankNumber/Rank - 03.svg";
import Number4 from "../../../../assets/rankNumber/Rank - 04.svg";
import Number5 from "../../../../assets/rankNumber/Rank - 05.svg";
import Number6 from "../../../../assets/rankNumber/Rank - 06.svg";
import Number7 from "../../../../assets/rankNumber/Rank - 07.svg";
import Number8 from "../../../../assets/rankNumber/Rank - 08.svg";
import Number9 from "../../../../assets/rankNumber/Rank - 09.svg";
import Number10 from "../../../../assets/rankNumber/Rank - 10.svg";
import useGet from "../../../../hooks/useGet";

const TopIndonesian = () => {
  const { data, get } = useGet(`movie/popular`);
  // data
  const dataFeedback = data.feedback.results;
  console.log("data continue", dataFeedback);
  // base image url for img
  const baseImgUrl = data.baseUrl;

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    get();
  }, []);

  if (data.feedback && dataFeedback.length > 0) {
    return (
      <div className="flex flex-col gap-y-3">
        <p className="font-medium text-2xl px-8">Top 10 Indonesian Movies</p>
        {/* list */}

        <Carousel
          scrollSnap={true}
          cols={5}
          rows={1}
          gap={5}
          containerClassName="flex w-full h-[205px] px-3"
          arrowLeft={
            <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full left-8 rounded-l-sm bg-slate-800 bg-opacity-80">
              <svg
                className="rotate-180"
                width="20"
                height="34"
                viewBox="0 0 20 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                  fill="white"
                />
              </svg>
            </div>
          }
          arrowRight={
            <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full right-8 rounded-r-sm bg-slate-800 bg-opacity-30">
              <svg
                width="20"
                height="34"
                viewBox="0 0 20 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                  fill="white"
                />
              </svg>
            </div>
          }
        >
          {/* loop here */}
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number1} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[9].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number2} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[8].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number3} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[7].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number4} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[6].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number5} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[5].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number6} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[4].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number7} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[3].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number8} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[2].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number9} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[1].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inline-flex w-full justify-between">
              <img src={Number10} alt="" className="w-[100px]" />
              <img
                src={`${baseImgUrl}${dataFeedback[0].poster_path}`}
                alt=""
                className="w-[145px] h-[205px] object-cover"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  } else {
    return <div>Tidak Ada Data</div>;
  }
};

export default TopIndonesian;
