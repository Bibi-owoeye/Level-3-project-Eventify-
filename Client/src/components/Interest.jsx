import React, { useState } from "react";
import icon from "../assets/icons8-arrow.png";
import cutoff from "../assets/cutoff.png";
import { useNavigate } from "react-router";

const Interest = () => {

 const navigate = useNavigate()

  const [isClicked, setIsClicked] = useState({
    concerts: false,
    festivals: false,
    workshops: false,
    djNights: false,
    art: false,
    cutural: false,
    theater: false,
    dance: false,
    food: false,
    wine: false,
    cooking: false,
    beer: false,
    marathons: false,
    yoga: false,
    fitness: false,
    sport: false,
    confrences: false,
    seminars: false,
    networking: false,
    family: false,
    kid: false,
    education: false,
    tech: false,
    hackatons: false,
    startup: false,
    gadget: false,
    stand: false,
    improv: false,
    comedy: false,
    magic: false,
    fund: false,
    charity: false,
    benefit: false,
    auction: false,
    lecture: false,
    workshop: false,
    educational: false,
    skill: false,
    city: false,
    adventure: false,
    experience: false,
    cruise: false,
  });

  const handleClick = (type) => {
    // setIsIconVisible(!isIconVisible);
    setIsClicked((prevClicked) => ({
      ...prevClicked,
      [type]: !prevClicked[type],
    }));
  };

  return (
    <div className="p-8">
      <div className="flex gap-5 items-center text-[#2d2c3c] text-4xl">
        <img src={icon} alt=""  onClick={()=> navigate('/nav2/home')}/>
        <h1 className="font-bold"> Share your interests with us</h1>
      </div>

      <p className="pl-[52px] pt-8 text-[1.2rem]">
        Choose your intersets below to get personalized event suggestions{" "}
      </p>
      <div className="p-[55px]">
        <h2 className="font-semibold text-[22px]">Music</h2>

        <div className="flex gap-5 pb-16 pt-5">
          <button
            onClick={() => handleClick("concerts")}
            className={`
                text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl
                flex gap-3 items-center
                ${
                  isClicked.concerts
                    ? "bg-yellow-300 text-black"
                    : "bg-[#9f9ca523] hover:bg-[#bbb9b9b4]"
                }
                cursor-pointer text-gray
              `}
          >
            Concerts
            {isClicked.concerts && (
              <span>
                <img className="w-[15px]" src={cutoff} alt="" />
              </span>
            )}
          </button>

          <button
            onClick={() => handleClick("festivals")}
            className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
              isClicked.festivals
                ? "bg-yellow-300 text-black"
                : "bg-[#9f9ca523] hover:bg-[#bbb9b9b4] "
            } cursor pointer text-gray `}
          >
            Music Festivals
            {isClicked.festivals && (
              <span>
                <img className="w-[15px]" src={cutoff} alt="" />
              </span>
            )}
          </button>

          <button
            onClick={() => handleClick("workshops")}
            className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
              isClicked.workshops
                ? "bg-yellow-300 text-black"
                : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
            }  cursor pointer text-gray`}
          >
            Music Workshops
            {isClicked.workshops && (
              <span>
                <img className="w-[15px]" src={cutoff} alt="" />
              </span>
            )}
          </button>

          <button
            onClick={() => handleClick("djNights")}
            className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
              isClicked.djNights
                ? "bg-yellow-300 text-black"
                : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
            }  cursor pointer text-gray`}
          >
            Dj Nights
            {isClicked.djNights && (
              <span>
                <img className="w-[15px]" src={cutoff} alt="" />
              </span>
            )}
          </button>
        </div>

        <hr className="border-[1.5px] border-ash" />

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Arts & Culture</h2>
          <div className="flex gap-5 pb-16 pt-5">
            <button
              onClick={() => handleClick("art")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.art
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Art Exhibitions
              {isClicked.art && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("cutural")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.cutural
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Cutural Festivals
              {isClicked.cutural && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("theater")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.theater
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Theater Playss
              {isClicked.theater && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("dance")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.dance
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Dance Performances
              {isClicked.dance && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Food & Drink</h2>
          <div className="flex gap-5 pb-16 pt-5">
            <button
              onClick={() => handleClick("food")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.food
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Food Festivals
              {isClicked.food && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("wine")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.wine
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Wine Tastings{" "}
              {isClicked.wine && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("cook")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.cook
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Cooking Classes{" "}
              {isClicked.cook && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("beer")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.beer
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Beer Festivals{" "}
              {isClicked.beer && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Sports & Fitness</h2>
          <div className="flex gap-5 pb-16 pt-5">
            <button
              onClick={() => handleClick("marathons")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.marathons
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Marathons
              {isClicked.marathons && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("yoga")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.yoga
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Yoga Sessions
              {isClicked.yoga && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("fitness")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.fitness
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Fitness Workshops
              {isClicked.fitness && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("sport")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.sport
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Sporting Events
              {isClicked.sport && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Business & Networking</h2>
          <div className="flex gap-5 pb-16 pt-5">
            <button
              onClick={() => handleClick("confrences")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.confrences
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Confrences
              {isClicked.confrences && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("seminars")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.seminars
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Seminars
              {isClicked.seminars && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("workshops")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.workshops
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Workshops
              {isClicked.workshops && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("nework")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.nework
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Networking Events
              {isClicked.nework && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Family & Kids</h2>
          <div className="flex gap-5 pb-16 pt-5">
            <button
              onClick={() => handleClick("family")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.family
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Family-Friendly Events
              {isClicked.family && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("child")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.child
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Children's Workshops
              {isClicked.child && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("kid")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.kid
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Kid-Friendly Shows
              {isClicked.kid && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("education")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.education
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Educational Activities
              {isClicked.education && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Technology</h2>
          <div className="flex gap-5 pb-16 pt-5">
            <button
              onClick={() => handleClick("tech")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.tech
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Tech Confrences{" "}
              {isClicked.tech && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("hackaton")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.hackaton
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Hackatons
              {isClicked.hackaton && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("startup")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.startup
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Startup Events
              {isClicked.startup && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button
              onClick={() => handleClick("gadget")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.gadget
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Gadget Expos
              {isClicked.gadget && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Commedy & Entertainment</h2>
          <div className="flex gap-5 pb-16 pt-5">
            <button onClick={() => handleClick("stand")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.stand
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}>
              Stand-up Comedy{isClicked.stand && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button onClick={() => handleClick("improv")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.improv
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}>
              Improv Nights{isClicked.improv && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>

            <button onClick={() => handleClick("comedy")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.comedy
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}>
              Comedy Festivals{isClicked.comedy && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )} 
            </button>
            <button onClick={() => handleClick("magic")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.magic
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}>
              Magic Shows{isClicked.magic && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )} 
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Charity & Causes</h2>
          <div className="flex gap-5 pb-16 pt-5">
            <button
              onClick={() => handleClick("fund")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.fund
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Fundraising Events
              {isClicked.fund && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
            <button
              onClick={() => handleClick("charity")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.charity
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Charity Galas
              {isClicked.charity && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
            <button
              onClick={() => handleClick("benefit")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.benefit
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Benefits Concert
              {isClicked.benefit && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
            <button
              onClick={() => handleClick("auction")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.auction
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Auction and Fundraisers
              {isClicked.auction && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Education & Learning</h2>

          <div className="flex gap-5 pb-16 pt-5">
            <button
              onClick={() => handleClick("lecture")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.lecture
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Lectures & Talks
              {isClicked.lecture && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
            <button
              onClick={() => handleClick("workshop")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.workshop
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Workshops
              {isClicked.workshop && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
            <button
              onClick={() => handleClick("educational")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.educational
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Educational Seminars
              {isClicked.educational && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
            <button
              onClick={() => handleClick("skill")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.skill
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Skill-Building Sessions
              {isClicked.skill && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>

        <div className="pt-[50px]">
          <h2 className="font-semibold text-[22px]">Travel & Adventures</h2>
          <div className="flex gap-5 pb-16 pt-5">
            <button
              onClick={() => handleClick("city")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.city
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              City Tours{" "}
              {isClicked.city && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
            <button
              onClick={() => handleClick("adventure")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.adventure
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Adventure Travel
              {isClicked.adventure && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
            <button
              onClick={() => handleClick("experience")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.experience
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Cultural Experiences
              {isClicked.experience && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
            <button
              onClick={() => handleClick("cruise")}
              className={`text-[#8d8d8e] font-semibold border-2 p-2 rounded-2xl flex gap-3 items-center ${
                isClicked.cruise
                  ? "bg-yellow-300 text-black"
                  : "hover:bg-[#bbb9b9b4] bg-[#9f9ca523]"
              }  cursor pointer text-gray`}
            >
              Cruise Vacations
              {isClicked.cruise && (
                <span>
                  <img className="w-[15px]" src={cutoff} alt="" />
                </span>
              )}
            </button>
          </div>
          <hr className="border-[1.5px] border-ash" />
        </div>
      </div>

      <div className="flex justify-end pe-[48px]">
        <button className="bg-[#2b293d] text-white p-[15px] w-52 rounded-xl">
          Save my Interest
        </button>
      </div>
    </div>
  );
};

export default Interest;
