import React, { useState } from 'react';
import {
  img,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
} from "./svg-vxsfb";

interface StatusProps {
  size?: "16" | "24" | "32" | "40" | "48" | "56" | "72";
  type?: "Success" | "Error" | "Alert" | "Info" | "Pending";
}

function Status({ size = "16", type = "Success" }: StatusProps) {
  if (size === "16" && type === "Error") {
    return (
      <div
        className="bg-[#cb272f] relative rounded-[666px] size-full"
        data-name="Size=16, Type=Error"
      >
        <div className="flex flex-row items-center justify-center max-h-inherit max-w-inherit relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center max-h-inherit max-w-inherit p-[2px] relative size-full">
            <div
              className="max-h-4 max-w-4 overflow-clip relative shrink-0 size-3"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#fbeaea] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.293px] mask-size-[17.414px_17.414px]"
                data-name="Color"
                style={{ maskImage: `url('${img}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "16" && type === "Alert") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[666px] size-full"
        data-name="Size=16, Type=Alert"
      >
        <div className="flex flex-row items-center justify-center max-h-inherit max-w-inherit relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center max-h-inherit max-w-inherit p-[2px] relative size-full">
            <div
              className="max-h-4 max-w-4 relative shrink-0 size-3"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.5px_4px] mask-size-[3px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img1}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "16" && type === "Info") {
    return (
      <div
        className="bg-[#454745] relative rounded-[666px] size-full"
        data-name="Size=16, Type=Info"
      >
        <div className="flex flex-row items-center justify-center max-h-inherit max-w-inherit relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center max-h-inherit max-w-inherit p-[2px] relative size-full">
            <div
              className="max-h-4 max-w-4 relative shrink-0 size-3"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_4px] mask-size-[6px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img2}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "16" && type === "Pending") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[666px] size-full"
        data-name="Size=16, Type=Pending"
      >
        <div className="flex flex-row items-center justify-center max-h-inherit max-w-inherit relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center max-h-inherit max-w-inherit p-[2px] relative size-full">
            <div
              className="max-h-4 max-w-4 relative shrink-0 size-3"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_3px] mask-size-[6.707px_14.707px]"
                data-name="Color"
                style={{ maskImage: `url('${img3}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "24" && type === "Success") {
    return (
      <div
        className="bg-[#054d28] relative rounded-[999px] size-full"
        data-name="Size=24, Type=Success"
      >
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[4px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-4"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.293px_5.293px] mask-size-[19.414px_13.703px]"
                data-name="Color"
                style={{ maskImage: `url('${img4}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "24" && type === "Error") {
    return (
      <div
        className="bg-[#cb272f] relative rounded-[999px] size-full"
        data-name="Size=24, Type=Error"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-4"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#fbeaea] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.4996px] mask-size-[14px_14px]"
                data-name="Color"
                style={{ maskImage: `url('${img5}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "24" && type === "Alert") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[999px] size-full"
        data-name="Size=24, Type=Alert"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative size-full">
            <div className="relative shrink-0 size-4" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.5px_4px] mask-size-[3px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img6}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "24" && type === "Info") {
    return (
      <div
        className="bg-[#454745] relative rounded-[999px] size-full"
        data-name="Size=24, Type=Info"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative size-full">
            <div className="relative shrink-0 size-4" data-name="Icon">
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_4px] mask-size-[6px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img7}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "24" && type === "Pending") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[999px] size-full"
        data-name="Size=24, Type=Pending"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative size-full">
            <div className="relative shrink-0 size-4" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_3px] mask-size-[6.707px_14.707px]"
                data-name="Color"
                style={{ maskImage: `url('${img8}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "32" && type === "Success") {
    return (
      <div
        className="bg-[#054d28] relative rounded-[999px] size-full"
        data-name="Size=32, Type=Success"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[7px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-[18px]"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.293px_5.293px] mask-size-[19.414px_13.703px]"
                data-name="Color"
                style={{ maskImage: `url('${img9}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "32" && type === "Error") {
    return (
      <div
        className="bg-[#cb272f] relative rounded-[999px] size-full"
        data-name="Size=32, Type=Error"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[7px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-[18px]"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#fbeaea] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.293px] mask-size-[17.414px_17.414px]"
                data-name="Color"
                style={{ maskImage: `url('${img10}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "32" && type === "Alert") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[999px] size-full"
        data-name="Size=32, Type=Alert"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[7px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.5px_4px] mask-size-[3px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img11}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "32" && type === "Info") {
    return (
      <div
        className="bg-[#454745] relative rounded-[999px] size-full"
        data-name="Size=32, Type=Info"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[7px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_4px] mask-size-[6px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img12}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "32" && type === "Pending") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[999px] size-full"
        data-name="Size=32, Type=Pending"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[7px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_3px] mask-size-[6.707px_14.707px]"
                data-name="Color"
                style={{ maskImage: `url('${img13}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "40" && type === "Success") {
    return (
      <div
        className="bg-[#054d28] relative rounded-[1248.75px] size-full"
        data-name="Size=40, Type=Success"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[10px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-5"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.293px_5.293px] mask-size-[19.414px_13.703px]"
                data-name="Color"
                style={{ maskImage: `url('${img14}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "40" && type === "Error") {
    return (
      <div
        className="bg-[#cb272f] relative rounded-[1248.75px] size-full"
        data-name="Size=40, Type=Error"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[10px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-5"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#fbeaea] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.293px] mask-size-[17.414px_17.414px]"
                data-name="Color"
                style={{ maskImage: `url('${img15}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "40" && type === "Alert") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[1248.75px] size-full"
        data-name="Size=40, Type=Alert"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[10px] relative size-full">
            <div className="relative shrink-0 size-5" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.5px_4px] mask-size-[3px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img16}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "40" && type === "Info") {
    return (
      <div
        className="bg-[#454745] relative rounded-[1248.75px] size-full"
        data-name="Size=40, Type=Info"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[10px] relative size-full">
            <div className="relative shrink-0 size-5" data-name="Icon">
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_4px] mask-size-[6px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img17}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "40" && type === "Pending") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[1248.75px] size-full"
        data-name="Size=40, Type=Pending"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[10px] relative size-full">
            <div className="relative shrink-0 size-5" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_3px] mask-size-[6.707px_14.707px]"
                data-name="Color"
                style={{ maskImage: `url('${img18}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "48" && type === "Success") {
    return (
      <div
        className="bg-[#054d28] relative rounded-[1498.5px] size-full"
        data-name="Size=48, Type=Success"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[12px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-6"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.293px_5.293px] mask-size-[19.414px_13.703px]"
                data-name="Color"
                style={{ maskImage: `url('${img19}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "48" && type === "Error") {
    return (
      <div
        className="bg-[#cb272f] relative rounded-[1498.5px] size-full"
        data-name="Size=48, Type=Error"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[12px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-6"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#fbeaea] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.293px] mask-size-[17.414px_17.414px]"
                data-name="Color"
                style={{ maskImage: `url('${img20}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "48" && type === "Alert") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[1498.5px] size-full"
        data-name="Size=48, Type=Alert"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[12px] relative size-full">
            <div className="relative shrink-0 size-6" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.5px_4px] mask-size-[3px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img21}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "48" && type === "Info") {
    return (
      <div
        className="bg-[#454745] relative rounded-[1498.5px] size-full"
        data-name="Size=48, Type=Info"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[12px] relative size-full">
            <div className="relative shrink-0 size-6" data-name="Icon">
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_4px] mask-size-[6px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img22}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "48" && type === "Pending") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[1498.5px] size-full"
        data-name="Size=48, Type=Pending"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[12px] relative size-full">
            <div className="relative shrink-0 size-6" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_3px] mask-size-[6.707px_14.707px]"
                data-name="Color"
                style={{ maskImage: `url('${img23}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "56" && type === "Success") {
    return (
      <div
        className="bg-[#054d28] relative rounded-[1748.25px] size-full"
        data-name="Size=56, Type=Success"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[14px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-7"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.293px_5.293px] mask-size-[19.414px_13.703px]"
                data-name="Color"
                style={{ maskImage: `url('${img24}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "56" && type === "Error") {
    return (
      <div
        className="bg-[#cb272f] relative rounded-[1748.25px] size-full"
        data-name="Size=56, Type=Error"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[14px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-7"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#fbeaea] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.293px] mask-size-[17.414px_17.414px]"
                data-name="Color"
                style={{ maskImage: `url('${img25}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "56" && type === "Alert") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[1748.25px] size-full"
        data-name="Size=56, Type=Alert"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[14px] relative size-full">
            <div className="relative shrink-0 size-7" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.5px_4px] mask-size-[3px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img26}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "56" && type === "Info") {
    return (
      <div
        className="bg-[#454745] relative rounded-[1748.25px] size-full"
        data-name="Size=56, Type=Info"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[14px] relative size-full">
            <div className="relative shrink-0 size-7" data-name="Icon">
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_4px] mask-size-[6px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img27}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "56" && type === "Pending") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[1748.25px] size-full"
        data-name="Size=56, Type=Pending"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[14px] relative size-full">
            <div className="relative shrink-0 size-7" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_3px] mask-size-[6.707px_14.707px]"
                data-name="Color"
                style={{ maskImage: `url('${img28}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "72" && type === "Success") {
    return (
      <div
        className="bg-[#054d28] relative rounded-[2247.75px] size-full"
        data-name="Size=72, Type=Success"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[18px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-9"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.293px_5.293px] mask-size-[19.414px_13.703px]"
                data-name="Color"
                style={{ maskImage: `url('${img29}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "72" && type === "Error") {
    return (
      <div
        className="bg-[#cb272f] relative rounded-[2247.75px] size-full"
        data-name="Size=72, Type=Error"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[18px] relative size-full">
            <div
              className="overflow-clip relative shrink-0 size-9"
              data-name="Icon"
            >
              <div
                className="absolute bg-[#fbeaea] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.293px] mask-size-[17.414px_17.414px]"
                data-name="Color"
                style={{ maskImage: `url('${img30}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "72" && type === "Alert") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[2247.75px] size-full"
        data-name="Size=72, Type=Alert"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[18px] relative size-full">
            <div className="relative shrink-0 size-9" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.5px_4px] mask-size-[3px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img31}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "72" && type === "Info") {
    return (
      <div
        className="bg-[#454745] relative rounded-[2247.75px] size-full"
        data-name="Size=72, Type=Info"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[18px] relative size-full">
            <div className="relative shrink-0 size-9" data-name="Icon">
              <div
                className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_4px] mask-size-[6px_16px]"
                data-name="Color"
                style={{ maskImage: `url('${img32}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "72" && type === "Pending") {
    return (
      <div
        className="bg-[#ffd11a] relative rounded-[2247.75px] size-full"
        data-name="Size=72, Type=Pending"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[18px] relative size-full">
            <div className="relative shrink-0 size-9" data-name="Icon">
              <div
                className="absolute bg-[#121511] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_3px] mask-size-[6.707px_14.707px]"
                data-name="Color"
                style={{ maskImage: `url('${img33}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="bg-[#054d28] relative rounded-[666px] size-full"
      data-name="Size=16, Type=Success"
    >
      <div className="flex flex-row items-center justify-center max-h-inherit max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center max-h-inherit max-w-inherit p-[2px] relative size-full">
          <div
            className="bg-[#054d28] max-h-4 max-w-4 overflow-clip relative rounded-[1248.75px] shrink-0 size-3"
            data-name="Icon"
          >
            <div
              className="absolute bg-[#ffffff] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.293px_5.293px] mask-size-[19.414px_13.703px]"
              data-name="Color"
              style={{ maskImage: `url('${img34}')` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Prompt Interface
interface PromptData {
  id: string;
  title: string;
  description: string;
  status: "Success" | "Error" | "Alert" | "Info" | "Pending";
  isExpanded: boolean;
}

// ChevronDown component for the expansion indicator
function ChevronDown({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div 
      className={`relative shrink-0 size-4 transition-transform duration-200 ${
        isExpanded ? 'rotate-180' : ''
      }`} 
      data-name="Chevron down"
    >
      <div
        className="absolute bg-[#cb272f] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.195px_4.862px] mask-size-[11.609px_6.469px]"
        data-name="Color"
        style={{ maskImage: `url('${img38}')` }}
      />
    </div>
  );
}

// Individual Prompt Component
function PromptItem({ 
  prompt, 
  onToggle, 
  onAction,
  stackIndex 
}: { 
  prompt: PromptData; 
  onToggle: (id: string) => void;
  onAction: (id: string, action: 'primary' | 'secondary') => void;
  stackIndex: number;
}) {
  const handleHeaderClick = () => {
    onToggle(prompt.id);
  };

  const handlePrimaryAction = () => {
    onAction(prompt.id, 'primary');
  };

  const handleSecondaryAction = () => {
    onAction(prompt.id, 'secondary');
  };

  if (prompt.isExpanded) {
    return (
      <div
        className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start mb-[-30px] p-0 relative shrink-0 w-full"
        data-name="Shadow group"
        style={{ zIndex: 10 - stackIndex }}
      >
        <div
          className="absolute bg-[#ffffff] bottom-0.5 h-[77px] left-0 right-[-0.217px] rounded-bl-[24px] rounded-br-[24px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.08)]"
          data-name="Shadow"
        />
        <div
          className="bg-[#fbeaea] relative rounded-3xl shrink-0 w-full"
          data-name="Expanded prompt"
        >
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
              <div
                className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Main"
              >
                {/* Container with interactive elements */}
                <div
                  className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div className="relative shrink-0 size-12" data-name="Media">
                    {/* Interactivity overlay */}
                    <div
                      className="absolute box-border content-stretch flex flex-row items-start justify-start left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[48px_48px] p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
                      data-name="Interactivity"
                      style={{ maskImage: `url('${img35}')` }}
                    >
                      <div
                        className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-[999px] shrink-0 size-12"
                        data-name="Content"
                      >
                        <div className="absolute border border-[rgba(14,15,12,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                        <div
                          className="overflow-clip relative shrink-0 size-6"
                          data-name="Icon"
                        >
                          <div
                            className="absolute bg-[#cb272f] inset-0 mask-alpha flex flex-row items-center justify-center mask-intersect mask-no-clip mask-no-repeat mask-position-[2.447px_2.293px] mask-size-[19.106px_19.414px]"
                            data-name="Color"
                            style={{ maskImage: `url('${img36}')` }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Badge */}
                    <div
                      className="absolute bottom-0 left-[66.667%] overflow-clip right-0 rounded-[40px] top-[66.667%]"
                      data-name="Badge"
                    >
                      <div
                        className="absolute bg-[#cb272f] box-border content-stretch flex flex-row gap-2.5 inset-0 items-center justify-center max-h-6 max-w-6 p-[2px] rounded-[666px]"
                        data-name="Status"
                      >
                        <div
                          className="max-h-4 max-w-4 overflow-clip relative shrink-0 size-3"
                          data-name="Icon"
                        >
                          <div
                            className="absolute bg-[#fbeaea] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3px] mask-size-[7px_7px]"
                            data-name="Color"
                            style={{ maskImage: `url('${img}')` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div
                    className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-[#cb272f] text-left"
                    data-name="Content"
                  >
                    <div className="flex flex-col font-['Inter:Semi_bold',_sans-serif] justify-center relative shrink-0 text-[16px] tracking-[-0.176px] w-full">
                      <p className="block leading-[1.5]">{prompt.title}</p>
                    </div>
                    <div className="flex flex-col font-['Inter:Regular_',_sans-serif] justify-center relative shrink-0 text-[14px] tracking-[-0.084px] w-full">
                      <p className="block leading-[1.55]">{prompt.description}</p>
                    </div>
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={handleHeaderClick}
                    className="bg-[#f5d3d4] box-border content-stretch flex flex-row items-center justify-center max-h-6 max-w-6 min-h-6 min-w-6 p-0 relative rounded-[999px] shrink-0 size-6 hover:bg-[#f0c8c9] transition-colors"
                    data-name="Icon button"
                  >
                    <div
                      className="overflow-clip relative shrink-0 size-4"
                      data-name="Icon"
                    >
                      <div
                        className="absolute bg-[#cb272f] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.293px] mask-size-[10.5px_10.5px]"
                        data-name="Color"
                        style={{ maskImage: `url('${img37}')` }}
                      />
                    </div>
                  </button>
                </div>
                
                {/* Action buttons */}
                <div
                  className="box-border content-stretch cursor-pointer flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
                  data-name="Action"
                >
                  <button
                    onClick={handleSecondaryAction}
                    className="basis-0 bg-[#f5d3d4] grow min-h-px min-w-px relative rounded-[999px] shrink-0 hover:bg-[#f0c8c9] transition-colors"
                    data-name="Button"
                  >
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row items-center justify-center p-[8px] relative w-full">
                        <div
                          className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative shrink-0"
                          data-name="Content"
                        >
                          <div className="flex flex-col font-['Inter:Semi_bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb272f] text-[16px] text-left text-nowrap tracking-[-0.176px]">
                            <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                              Secondary
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={handlePrimaryAction}
                    className="basis-0 bg-[#cb272f] grow min-h-px min-w-px relative rounded-[999px] shrink-0 hover:bg-[#b52229] transition-colors"
                    data-name="Button"
                  >
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row items-center justify-center p-[8px] relative w-full">
                        <div
                          className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative shrink-0"
                          data-name="Content"
                        >
                          <div className="flex flex-col font-['Inter:Semi_bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fbeaea] text-[16px] text-left text-nowrap tracking-[-0.176px]">
                            <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                              Primary
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Collapsed state
  return (
    <div
      className="bg-[#f5d3d4] mb-[-30px] relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full cursor-pointer hover:bg-[#f0c8c9] transition-colors"
      data-name="Collapsed prompt"
      style={{ zIndex: 10 - stackIndex }}
      onClick={handleHeaderClick}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-3 pt-[42px] px-4 relative w-full">
          <div
            className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
            data-name="Main"
          >
            <div
              className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                className="bg-[#cb272f] box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[999px] shrink-0"
                data-name="Status"
              >
                <Status size="24" type={prompt.status} />
              </div>
              <div
                className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
                data-name="Content"
              >
                <div className="basis-0 flex flex-col font-['Inter:Semi_bold',_sans-serif] grow justify-center leading-[0] min-h-6 min-w-px not-italic relative shrink-0 text-[#cb272f] text-[14px] text-left tracking-[-0.084px]">
                  <p className="block leading-[1.55]">{prompt.title}</p>
                </div>
                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative shrink-0">
                  <ChevronDown isExpanded={prompt.isExpanded} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Interactive Prompt Stack Component
export default function InteractivePromptStack() {
  const [prompts, setPrompts] = useState<PromptData[]>([
    {
      id: '1',
      title: 'System Error Detected',
      description: 'Critical system error requires immediate attention',
      status: 'Error',
      isExpanded: true
    },
    {
      id: '2',
      title: 'Connection Issue',
      description: 'Network connection unstable',
      status: 'Error',
      isExpanded: false
    },
    {
      id: '3',
      title: 'Update Available',
      description: 'New version ready for installation',
      status: 'Error',
      isExpanded: false
    }
  ]);

  const [showAll, setShowAll] = useState(false);
  const displayedPrompts = showAll ? prompts : prompts.slice(0, 3);

  const handleTogglePrompt = (id: string) => {
    setPrompts(prevPrompts => 
      prevPrompts.map(prompt => ({
        ...prompt,
        isExpanded: prompt.id === id ? !prompt.isExpanded : false
      }))
    );
  };

  const handleAction = (id: string, action: 'primary' | 'secondary') => {
    console.log(`${action} action triggered for prompt ${id}`);
    // Handle the action here - could remove the prompt, mark as resolved, etc.
    if (action === 'primary') {
      // Remove the prompt on primary action
      setPrompts(prevPrompts => prevPrompts.filter(prompt => prompt.id !== id));
    }
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative size-full max-w-md mx-auto"
      data-name="Interactive Prompt Stack"
    >
      <div
        className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip pb-[30px] pt-0 px-0 relative shrink-0 w-full"
        data-name="Stack"
      >
        {displayedPrompts.map((prompt, index) => (
          <PromptItem
            key={prompt.id}
            prompt={prompt}
            onToggle={handleTogglePrompt}
            onAction={handleAction}
            stackIndex={index}
          />
        ))}
      </div>
      
      {prompts.length > 3 && (
        <button
          onClick={handleShowAll}
          className="bg-[rgba(62,59,7,0.07)] box-border content-stretch cursor-pointer flex flex-row items-center justify-center overflow-visible px-2 py-[5px] relative rounded-[999px] shrink-0 hover:bg-[rgba(62,59,7,0.12)] transition-colors"
          data-name="Button"
        >
          <div
            className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative shrink-0"
            data-name="Content"
          >
            <div className="flex flex-col font-['Inter:Semi_bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[14px] text-left text-nowrap tracking-[-0.084px]">
              <p className="adjustLetterSpacing block leading-[1.55] whitespace-pre">
                {showAll ? `Hide ${prompts.length - 3} items` : `See all ${prompts.length}`}
              </p>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}