import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const MemeHistory: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>History of OIIAOIIA Meme</CardTitle>
      </CardHeader>
      <CardContent>
        <p>The OIIAOIIA meme, also known as "OO EE A E A Remix," originated from a video featuring a person making unusual vocalizations. The video gained popularity on TikTok and other social media platforms, with users creating remixes and parodies of the original sound.</p>
        <p>The meme's catchphrase "OO EE A E A" became widely recognized and has been used in various contexts, often to express confusion or surprise.</p>
        <p>For more information, visit the <a href="https://knowyourmeme.com/memes/oo-ee-a-e-a-remix" className="text-blue-500 hover:underline">Know Your Meme page</a>.</p>
      </CardContent>
    </Card>
  )
}

export default MemeHistory