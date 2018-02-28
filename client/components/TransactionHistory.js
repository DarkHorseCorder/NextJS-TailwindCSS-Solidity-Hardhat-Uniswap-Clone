import { useEffect, useState, useContext } from 'react'
import { client } from '../lib/sanityClient'
import { TransactionContext } from '../context/TransactionContext'
import Image from 'next/image'
import ethLogo from '../assets/ethCurrency.png'
import { FiArrowUpRight } from 'react-icons/fi'

const style = {
    wrapper: `h-full text-white select-none h-full w-screen flex-1 pt-14 flex items-end justify-end pb-12 overflow-scroll px-8`,
    txHistoryItem: `bg-[#191a1e] rounded-lg px-4 py-2 my-2 flex items-center justify-end`,
    txDetails: `flex items-center`,
    toAddress: `text-[#f48706] mx-2`,
    txTimestamp: `mx-2`,
    etherscanLink: `flex items-center text-[#2172e5]`,
}

const TransactionHistory = () => {
    const { isLoading, currentAccount } = useContext(TransactionContext)
    const [TransactionHistory, setTransactionHistory] = useState([])

    useEffect(() => {
        ;(async () => {
            if (!isLoading && currentAccount) {
                const query = `
                    *[_type ==]
                `
            }
        })
    })
}