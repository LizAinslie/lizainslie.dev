import type { FC } from "react";
import { useLanyard } from "react-use-lanyard";

export type DiscordTagProps = {
  className?: string;
};

const DiscordTag: FC<DiscordTagProps> = ({ className }) => {
  const lanyard = useLanyard({
    userId: "543542278967394322",
    socket: true,
  });

  return (
    <span className={`whitespace-nowrap ${className}`}>
      {!lanyard.loading && lanyard.status?.discord_user ? (
        `@${lanyard.status.discord_user.username}`
      ) : (
        <></>
      )}
    </span>
  );
};

export default DiscordTag;
