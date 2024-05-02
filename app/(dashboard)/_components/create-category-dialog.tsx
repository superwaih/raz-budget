"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useState } from "react";
import { CreateCategorySchema, CreateCategorySchemaType } from "../../../schema/categories";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogTrigger } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { PlusSquare } from "lucide-react";

interface Props {
    type: TransactionType;
    trigger?: ReactNode;
  }


const CreateCategoryDialog = ({type} : Props) => {
    const [open, setOpen] = useState(false);
    const form = useForm<CreateCategorySchemaType>({
        resolver: zodResolver(CreateCategorySchema),
        defaultValues:{
            type,
        }
    })
    const queryClient = useQueryClient()


    return (
    <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger asChild>
        <Button
            variant={"ghost"}
            className="flex border-separate items-center justify-start roudned-none border-b px-3 py-3 text-muted-foreground"
          >
            <PlusSquare className="mr-2 h-4 w-4" />
            Create new
          </Button>
        </DialogTrigger>

        <DialogContent>

        </DialogContent>
    </Dialog>
  )
}

export default CreateCategoryDialog
