/* eslint-disable react/prop-types */
import { Badge, Icon } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

const BadgeCustom = ({ onDelete, title, isDelete = true, ...props }) => {
  return (
    <Badge
      backgroundColor="#E9ECEF"
      border="1px solid #CED4DA"
      fontWeight="500"
      color="#212529"
      paddingX={2}
      borderRadius={3}
      {...props}
    >
      {title}
      {isDelete && (
        <Icon
          as={IoClose}
          onClick={onDelete}
          paddingTop="2px"
          fontSize="14px"
        />
      )}
    </Badge>
  );
};

export default BadgeCustom;
