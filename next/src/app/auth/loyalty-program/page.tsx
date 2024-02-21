import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  DefineRewardSection,
  EditSection,
  ScaleRewardSection,
  StampCountSection,
  StampLifeSection,
} from "./SettingsSections";

export const OptionHeader = ({
  title,
  info,
}: {
  title: string;
  info: string;
}) => {
  return (
    <div className="flex gap-3 items-center">
      <p className="text-xl font-semibold">{title}</p>
      <Popover>
        <PopoverTrigger>
          <IoIosInformationCircleOutline size={25} />
        </PopoverTrigger>
        <PopoverContent
          side="right"
          sideOffset={10}
          alignOffset={10}
          align="end"
        >
          {info}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default function LoyaltyProgram() {
  return (
    <>
      <p className="text-2xl font-semibold pt-10 pb-5">
        Loyalty Program Builder
      </p>

      <div className="flex justify-start gap-40">
        <div className="flex flex-col w-1/2">
          <Tabs defaultValue="settings" className="">
            <TabsList>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            <TabsContent value="settings">
              <div className="ml-10">
                <StampLifeSection />
                <StampCountSection />
                <ScaleRewardSection />
                <DefineRewardSection />
              </div>
            </TabsContent>
            <TabsContent value="design">Change your password here.</TabsContent>
          </Tabs>

          <EditSection />
        </div>
        <p className="bg-pink-500 w-1/3">live preview will go here</p>
      </div>
    </>
  );
}
