import Link from "next/link"
import { Button } from "@/components/ui/button"
 
export function ButtonContact() {
  return (
    <Button  variant="default">
      <Link href="contact">Contato</Link>
    </Button>
  )
}